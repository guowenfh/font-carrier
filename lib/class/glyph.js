var Base = require('./base.js')

var _ = require('lodash')
var helper = require('../helper/helper.js')
var config = require('../config.js')
var easySvg = require('../svg/easy_svg.js')
var svgpath = require('svgpath')
var _path = require('path')
var fs = require('fs')
// var Base = require('./base')
var Glyph = Base.extend({
  defaultOptions: config.DEFAULT_OPTIONS.glyph,
  init: function(options) {
    this.setOptions(options)
    this.__viewbox = new Base({
      vertAdvY: this.get('vertAdvY'),
      descent: this.get('descent') || -this.get('vertAdvY'),
      ascent: this.get('ascent') || 0,
    })
    //没有d参数，但是有svg参数，就进行转换
    if (!this.get('d') && options.svg) {
      var pathObj = easySvg.normalizeSvg(options.svg, {
          targetHeight: this.__viewbox.get('vertAdvY')
        })
        //翻转
      pathObj.path = easySvg.reversal(pathObj.path)
      this.set('d', pathObj.path)
      this.set('horizAdvX', pathObj.viewbox[2])
      this.set('vertAdvY', pathObj.viewbox[3])
    }

  },
  /**
   * 设置对应字体的 viewbox，针对新的字体的 viewbox 做出转换
   * @param {dstViewbox} dstViewbox 对应的 viewbox 对象
   *
   * @return {dstViewbox} 返回对应的 viewbox 对象
   */
  setViewbox: function(dstViewbox) {
    var dstFontAscent = dstViewbox.get('ascent')
    var curFontAscent = this.__viewbox.get('ascent')
    var path = this.get('d')
    var scale, ascent
    //当前有新的字体就需要做出转换
    if (this.__viewbox && this.__viewbox != dstViewbox) {
      //算出字体的比例，进行缩放还有参数变化
      scale = this.__viewbox.get('vertAdvY') / dstViewbox.get('vertAdvY')
      ascent = curFontAscent ? 0 : dstFontAscent * scale
      // 下面这样处理 主要出于性能考虑，svgpath 处理的时候性能有点差
      var svgpathAction = svgpath(path)
      if(scale){
        svgpathAction = svgpathAction.scale(1 / scale)
      }
      if(ascent){
        svgpathAction = svgpathAction.translate(0, ascent)
      }
      path = svgpathAction.round(config.PATH_DECIMAL).toString()

      this.set('d', path)
      this.set('horizAdvX', parseInt(this.get('horizAdvX') / scale))
      this.set('vertAdvY', parseInt(this.get('vertAdvY') / scale))

    }

    this.__viewbox = dstViewbox

    return dstViewbox
  },
  /**
   * 获取当前字形的svg
   * @param  {object} options 导入的选项
   * @param  {string} options.path            导出svg的路径，可以不传,不传就不会写文件
   * @param  {string} options.skipViewport    如果为true，那么将不会注入width和height
   * @param  {string} options.width           导出svg的宽度,默认100px
   * @param  {string} options.height          导出svg的高度,默认100px
   *
   * @return {string}  svg字符串
   */
  toSvg: function(options) {
      var data = _.clone(this.options)
      var ascent = this.__viewbox.get('ascent')
      var svgStr = ''

      data.d = svgpath(data.d).translate(0, -ascent).scale(1, -1).round(config.PATH_DECIMAL).toString()

      options = options || {}

      _.defaults(options, config.DEFAULT_EXPORT_OPTIONS)

      svgStr = _.template(config.SVG_TMPL)({
        glyph: data,
        options: options
      })
      if (options.path) {
        path = _path.resolve(process.cwd(), path)
        fs.writeFileSync(path, svgStr)
      }

      return svgStr
    }
    //todo toPng
})

module.exports = Glyph