var Font = require('./class/font')
var Glyph = require('./class/glyph')
var engine = require('./helper/engine')
var helper = require('./helper/helper')
var easySvg = require('./svg/easy_svg')

var _ = require('lodash')

var FontCarrier2 = {}

FontCarrier2.Font = Font
FontCarrier2.Glyph = Glyph
FontCarrier2.engine = engine
FontCarrier2.helper = helper
FontCarrier2.easySvg = easySvg

/**
 * 生成一个新的空白字体
 * options 包括字体的各种配置
 *
 * @return {font} 字体对象
 */

FontCarrier2.create = function(options) {
  return new Font(options)
}

/**
 * 装载一个字体，用于解析一个已有的字体，目前支持svg,ttf的字体格式
 * @param {string|buffer|path} input 需要转换的字体,可以是路径或者字体文本字符串
 * @return {font} 字体对象
 */
FontCarrier2.transfer = function(input, options) {

  var parsedFontObject = engine.parse(input)

  options = options || {}
  options = _.extend(options, parsedFontObject.options)

  var font = new Font(options)
  font.setFontface(parsedFontObject.fontface)
    //对于转换的字形  是带字体的偏移等信息的，不能直接使用object
  _.map(parsedFontObject.glyphs, function(glyph, k) {
    var tmplGlyph
    tmplGlyph = new Glyph(glyph)
    tmplGlyph.__viewbox = font.__viewbox
    font.setGlyph(k, tmplGlyph)
  })

  return font
}

module.exports = FontCarrier2