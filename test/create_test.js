var fontCarrier2 = require('../lib/index')

var options = {
  id: 'font-4',
  horizAdvX: 256,
  vertAdvY: 256
}

var fontface = {
  fontFamily: 'font-4',
  fontWeight: '400',
  fontStretch: 'normal',
  unitsPerEm: 256,
  ascent: 221,
  descent: -61
}

var glyphMap = {
  '&#x7EAF;': {
    unicode: '&#x7EAF;',
    glyphName: 'uni7EAF',
    d:
      'M136 6L136 6Q135 10 133 16L133 16Q131 27 132 57L132 57Q132 67 132 71L132 71Q123 67 115 59L115 59Q112 55 109 53L109 53Q108 53 107 52L107 52Q99 49 97 47L97 47Q92 46 90 50L90 50Q92 56 94 58L94 58Q95 60 98 62L98 62Q102 66 103 68L103 68Q103 69 103 74L103 74Q102 79 102 80L102 80Q102 83 98 86L98 86Q95 89 95 91L95 91Q95 93 100 95L100 95Q102 96 102 96L102 96Q103 95 105 94L105 94Q113 90 114 87L114 87Q114 86 115 84L115 84Q116 76 119 76L119 76Q119 76 120 76L120 76Q121 77 127 80L127 80Q129 81 130 81L130 81Q133 82 132 85L132 85Q132 92 133 106L133 106Q133 120 133 127L133 127Q133 131 131 129L131 129Q124 124 118 124L118 124Q110 124 110 127L110 127Q110 128 111 129L111 129Q111 129 112 130L112 130Q114 131 121 135L121 135Q128 139 129 139L129 139Q129 139 130 140L130 140Q133 141 133 145L133 145Q134 173 135 183L135 183Q136 191 130 193L130 193Q129 193 128 194L128 194Q118 198 115 202L115 202L115 203Q115 207 121 207L121 207Q123 207 123 207L123 207Q150 202 150 188L150 188Q150 188 150 187L150 187Q147 169 146 150L146 150Q146 148 147 149L147 149Q149 150 153 153L153 153Q162 159 168 160L168 160Q173 159 173 156L173 156Q173 149 158 143L158 143Q147 139 146 135L146 135Q144 120 145 92L145 92Q145 90 149 91L149 91Q167 100 168 101L168 101Q169 102 172 102L172 102Q181 105 180 112L180 112Q180 115 177 117L177 117Q174 119 174 121L174 121Q174 126 180 126L180 126Q196 122 198 115L198 115L198 114Q198 113 197 110L197 110Q190 87 184 81L184 81Q177 73 170 72L170 72Q166 72 166 76L166 76Q166 79 169 83L169 83Q171 87 171 89L171 89Q171 89 167 88L167 88Q164 87 163 87L163 87Q162 87 159 85L159 85Q150 80 148 79L148 79Q145 78 145 72L145 72Q144 59 144 26L144 26Q144 25 145 22L145 22Q146 16 147 14L147 14Q148 11 160 11L160 11Q218 13 232 27L232 27Q236 31 241 44L241 44Q242 46 243 51L243 51Q248 71 250 70L250 70Q255 70 255 62L255 62Q255 48 252 36L252 36Q250 21 244 17L244 17Q219-1 163-1L163-1Q142-1 136 6ZM41 51L41 51Q41 52 41 52L41 52Q54 69 65 89L65 89Q58 86 51 84L51 84Q49 83 48 83L48 83Q46 81 38 76L38 76Q31 72 31 72L31 72Q30 72 29 71L29 71Q26 69 24 69L24 69Q19 69 18 76L18 76L18 77Q41 98 58 139L58 139Q62 148 68 164L68 164Q69 167 70 169L70 169Q64 173 64 179L64 179Q65 183 68 183L68 183Q82 179 88 169L88 169Q88 166 87 163L87 163Q84 161 82 158L82 158Q78 153 74 141L74 141Q71 132 69 128L69 128Q67 126 64 121L64 121Q54 103 47 95L47 95Q53 95 69 99L69 99Q70 102 73 107L73 107Q82 128 90 128L90 128Q97 129 98 120L98 120Q98 119 98 118L98 118Q81 100 72 78L72 78Q72 77 71 75L71 75Q69 72 69 71L69 71L70 71Q76 75 80 76L80 76Q83 79 86 78L86 78Q90 78 90 72L90 72Q90 69 69 58L69 58Q59 53 57 52L57 52Q55 50 52 48L52 48Q49 45 47 46L47 46Q46 46 45 46L45 46Q41 47 41 51ZM93 47L93 47Q95 45 93 41L93 41Q84 35 75 28L75 28Q75 28 74 27L74 27Q48 6 43 6L43 6Q36 6 32 8L32 8Q29 10 33 14L33 14Q37 18 39 18L39 18Q44 19 47 21L47 21Q68 33 88 47L88 47Q89 47 90 47L90 47Q92 48 93 47Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni32431'
  },
  '&#x7A7A;': {
    unicode: '&#x7A7A;',
    glyphName: 'uni7A7A',
    d:
      'M56 2L56 2Q56 4 59 4L59 4Q62 4 67 4L67 4Q91 10 114 15L114 15Q114 19 115 29L115 29Q116 43 115 50L115 50Q115 53 112 53L112 53Q108 53 100 51L100 51Q92 48 88 48L88 48Q82 48 82 54L82 54Q83 57 88 58L88 58Q90 59 95 60L95 60Q106 62 111 65L111 65Q137 76 151 78L151 78Q159 79 159 71L159 71Q159 65 146 63L146 63Q139 61 136 60L136 60Q127 58 128 52L128 52Q128 50 129 44L129 44Q130 34 129 30L129 30Q128 21 125 17L125 17Q124 17 124 16L124 16Q152 21 197 15L197 15Q205 14 206 7L206 7Q205 0 199 0L199 0Q196 0 190 1L190 1Q189 2 188 2L188 2Q137 9 88 0L88 0Q87 0 82-1L82-1Q69-5 66-5L66-5Q56-5 56 2ZM95 116L95 116Q106 114 107 105L107 105Q107 100 90 90L90 90Q85 87 84 86L84 86Q83 85 81 84L81 84Q76 81 73 81L73 81Q69 81 70 84L70 84Q72 86 77 91L77 91Q79 93 83 98L83 98Q87 102 88 104L88 104Q89 105 89 109L89 109Q89 116 95 116ZM32 102L32 102Q32 102 32 103L32 103Q42 121 49 141L49 141Q51 145 55 145L55 145Q61 145 58 135L58 135Q60 135 62 135L62 135Q65 136 71 139L71 139Q76 141 79 142L79 142Q145 165 194 169L194 169Q223 158 230 142L230 142Q230 137 224 135L224 135Q219 136 209 134L209 134Q201 133 197 133L197 133Q188 133 188 136L188 136Q188 137 188 137L188 137Q196 141 205 144L205 144Q207 153 188 156L188 156Q115 153 65 125L65 125Q64 124 56 123L56 123Q54 120 51 110L51 110Q46 95 40 95L40 95Q33 96 32 102ZM129 123L129 123Q129 127 135 127L135 127Q167 114 173 102L173 102Q172 96 164 95L164 95Q160 97 157 100L157 100Q154 103 152 104L152 104Q151 105 143 111L143 111Q129 121 129 123ZM93 194L93 194Q92 198 97 197L97 197Q110 197 126 186L126 186Q129 184 130 180L130 180Q129 172 124 173L124 173Q119 173 113 178L113 178Q111 180 109 181L109 181Q108 181 107 182L107 182Q93 187 93 194Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni31354'
  },
  '&#x767D;': {
    unicode: '&#x767D;',
    glyphName: 'uni767D',
    d:
      'M147 25L147 25Q144 25 143 25L143 25Q128 24 101 17L101 17Q94 16 91 15L91 15Q90 15 86 13L86 13Q81 10 77 10L77 10Q74 9 73 13L73 13Q72 13 72 17L72 17Q72 19 71 20L71 20Q69 29 63 45L63 45Q60 55 58 61L58 61Q58 62 55 72L55 72Q52 81 51 82L51 82Q49 87 40 98L40 98Q39 99 39 100L39 100Q39 100 39 102L39 102Q39 106 45 106L45 106Q54 106 61 96L61 96Q61 96 65 86L65 86Q73 65 75 57L75 57Q75 56 76 52L76 52Q81 36 85 28L85 28Q93 29 108 33L108 33Q115 34 119 35L119 35Q122 36 128 37L128 37Q139 40 147 40L147 40Q152 40 156 40L156 40Q161 38 162 28L162 28Q162 21 166 21L166 21Q169 21 174 45L174 45Q177 56 178 58L178 58Q181 67 184 85L184 85Q188 102 190 111L190 111Q190 115 186 115L186 115Q179 115 164 113L164 113Q155 111 151 111L151 111Q149 111 145 111L145 111Q132 110 123 107L123 107Q95 101 66 92L66 92Q60 90 65 100L65 100Q66 102 71 105L71 105Q75 108 76 109L76 109Q79 117 87 132L87 132Q99 158 103 173L103 173L103 174Q103 177 100 181L100 181Q97 186 97 188L97 188Q98 192 103 193L103 193L120 185Q124 183 124 178L124 178Q124 175 120 171L120 171Q116 166 116 162L116 162Q107 143 98 123L98 123Q94 116 90 112L90 112Q100 114 123 119L123 119Q127 121 129 121L129 121Q162 127 191 129L191 129Q206 125 208 115L208 115Q208 109 203 97L203 97Q201 91 200 88L200 88Q199 84 195 68L195 68Q180 2 171 3L171 3Q165 3 152 19L152 19Q148 24 147 25ZM91 65L91 65Q91 70 97 72L97 72Q102 73 103 73L103 73Q106 74 111 75L111 75Q132 82 144 82L144 82Q149 82 151 76L151 76Q151 71 147 68L147 68Q133 70 119 65L119 65Q107 58 99 59L99 59Q91 59 91 65Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni30333'
  },
  '&#x20;': {
    unicode: '&#x20;',
    glyphName: 'uni20',
    d: '',
    horizAdvX: 65,
    vertAdvY: 256,
    name: 'uni32'
  },
  '&#x8FF7;': {
    unicode: '&#x8FF7;',
    glyphName: 'uni8FF7',
    d:
      'M133-1L133-1Q128 0 117 5L117 5Q107 10 101 11L101 11Q72 22 38 22L38 22Q34 22 26 18L26 18Q18 15 15 15L15 15Q9 16 8 22L8 22Q8 26 17 27L17 27Q19 28 20 28L20 28Q23 29 33 32L33 32Q37 32 44 32L44 32Q55 31 61 33L61 33Q61 34 63 35L63 35Q64 35 64 36L64 36Q63 41 57 50L57 50Q55 51 55 52L55 52Q55 52 54 55L54 55Q53 59 53 60L53 60Q51 66 51 72L51 72Q51 84 54 98L54 98Q36 90 25 80L25 80Q24 80 23 79L23 79Q17 74 13 74L13 74Q7 74 7 80L7 80Q7 81 8 82L8 82Q16 95 23 95L23 95Q24 95 25 95L25 95Q26 94 27 94L27 94Q29 94 33 97L33 97Q34 98 35 98L35 98Q37 99 39 100L39 100Q52 108 59 111L59 111Q59 112 60 115L60 115Q59 120 58 122L58 122Q59 127 66 126L66 126Q67 126 68 126L68 126Q70 125 71 124L71 124Q72 123 75 122L75 122Q82 121 82 113L82 113Q82 110 75 105L75 105Q72 103 71 102L71 102Q65 94 65 71L65 71Q64 53 83 36L83 36Q85 33 83 29L83 29Q88 28 92 26L92 26Q98 24 110 20L110 20Q158 1 185 2L185 2Q190 2 192 2L192 2Q194 2 213 3L213 3Q229 4 230 4L230 4Q231 5 236 4L236 4Q237 4 237 4L237 4Q238 5 242 6L242 6Q243 6 243 6L243 6Q248 5 249 1L249 1Q249 1 248 0L248 0Q246-1 244-3L244-3Q234-7 211-10L211-10Q205-11 202-11L202-11Q200-11 195-12L195-12Q187-14 182-14L182-14Q171-14 148-6L148-6Q138-2 133-1ZM133 31L133 31Q133 33 136 34L136 34Q138 35 138 36L138 36Q138 37 138 37L138 37Q140 64 137 94L137 94Q123 69 114 61L114 61Q113 60 112 59L112 59Q98 44 90 44L90 44Q87 45 87 48L87 48Q87 49 90 51L90 51Q91 52 91 52L91 52Q114 78 126 103L126 103Q126 103 125 102L125 102Q114 98 109 94L109 94Q103 91 99 91L99 91Q90 91 90 97L90 97Q90 103 99 101L99 101Q105 104 117 109L117 109Q129 115 135 117L135 117Q136 129 135 151L135 151Q135 173 135 183L135 183Q135 183 133 184L133 184Q127 188 127 192L127 192Q127 195 132 195L132 195Q134 195 134 195L134 195Q135 195 140 193L140 193Q141 193 144 193L144 193Q153 193 153 186L153 186Q153 184 150 177L150 177Q149 176 149 176L149 176Q148 150 149 123L149 123Q152 124 159 126L159 126Q171 131 177 131L177 131Q185 131 185 124L185 124Q185 119 174 117L174 117Q171 117 170 117L170 117Q162 116 150 111L150 111Q150 97 151 91L151 91Q164 88 176 81L176 81Q201 70 202 57L202 57Q202 48 194 48L194 48Q190 48 185 56L185 56Q184 58 183 59L183 59Q169 75 151 79L151 79Q153 59 153 46L153 46Q151 33 150 25L150 25Q149 17 144 16L144 16Q135 17 133 31ZM101 157L101 157Q101 161 104 161L104 161Q109 161 110 158L110 158Q110 158 110 157L110 157Q118 148 119 146L119 146Q121 144 121 141L121 141Q121 136 116 136L116 136Q105 139 101 157ZM153 137L153 137Q153 139 156 143L156 143Q158 145 158 146L158 146Q159 147 161 153L161 153Q163 157 163 158L163 158Q164 160 165 164L165 164Q169 173 169 177L169 177Q169 180 165 182L165 182Q161 185 161 187L161 187Q160 191 168 191L168 191Q170 191 171 191L171 191Q172 191 174 190L174 190Q187 185 187 179L187 179Q187 175 183 170L183 170Q181 168 180 167L180 167Q174 155 167 145L167 145Q166 144 164 143L164 143Q161 141 159 137L159 137Q158 136 156 136L156 136Q156 136 155 136L155 136Q153 135 153 137ZM56 150L56 150Q56 152 61 154L61 154Q66 157 66 160L66 160Q66 161 65 161L65 161Q56 168 56 179L56 179Q56 186 62 186L62 186Q65 186 68 178L68 178Q72 170 75 168L75 168Q76 167 78 166L78 166Q84 164 85 158L85 158Q84 152 80 151L80 151L63 146Q62 146 61 146L61 146Q57 147 56 150Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni36855'
  },
  '&#x4F60;': {
    unicode: '&#x4F60;',
    glyphName: 'uni4F60',
    d:
      'M121 4L121 4Q120 6 122 7L122 7Q123 8 124 6L124 6Q125 4 128 1L128 1Q137-9 140-9L140-9Q143-9 145 0L145 0Q145 3 145 8L145 8Q145 58 139 86L139 86Q139 87 137 90L137 90Q135 93 135 95L135 95Q135 99 140 99L140 99Q152 94 155 86L155 86Q155 84 154 82L154 82Q154 82 154 81L154 81Q154 78 157 60L157 60Q195 58 221 46L221 46Q235 39 235 32L235 32Q234 25 228 24L228 24Q224 24 216 29L216 29Q213 31 212 32L212 32Q177 51 157 50L157 50Q157 46 158 39L158 39Q160 11 158-3L158-3Q154-22 146-25L146-25Q133-25 121 4ZM50 0L50 0Q50 2 51 5L51 5Q51 8 51 9L51 9Q59 36 55 80L55 80Q55 81 55 82L55 82Q56 95 47 98L47 98Q32 80 12 66L12 66Q8 66 8 70L8 70Q49 109 69 165L69 165Q70 166 70 166L70 166Q70 169 66 173L66 173Q61 176 61 179L61 179Q61 182 64 182L64 182Q65 182 65 182L65 182L81 174Q81 174 82 173L82 173Q86 170 86 169L86 169Q86 168 86 166L86 166Q86 161 80 153L80 153Q76 148 75 145L75 145Q69 132 53 107L53 107Q53 105 58 102L58 102Q68 95 68 89L68 89Q68 88 67 85L67 85Q66 82 66 80L66 80Q66 74 68 62L68 62Q70 49 70 43L70 43Q70 26 63 0L63 0Q62 0 61-5L61-5Q61-6 60-6L60-6L59-6Q52-3 50 0ZM86 22L86 22Q86 28 97 43L97 43Q98 44 100 49L100 49Q102 54 102 55L102 55Q103 56 103 58L103 58Q104 64 109 64L109 64Q113 64 113 58L113 58Q112 51 107 38L107 38Q106 36 106 35L106 35Q105 33 104 28L104 28Q101 15 94 15L94 15Q87 16 86 22ZM160 98L160 98Q161 99 167 104L167 104Q172 109 173 110L173 110Q176 112 180 116L180 116Q184 120 186 122L186 122L187 126Q181 126 177 126L177 126Q141 119 118 106L118 106Q106 100 102 100L102 100Q97 100 97 105L97 105Q104 116 105 118L105 118Q121 152 127 200L127 200Q127 202 123 204L123 204Q120 207 120 209L120 209Q121 213 124 213L124 213Q125 213 126 213L126 213Q130 210 131 210L131 210Q132 210 133 209L133 209Q144 207 144 199L144 199Q144 194 140 185L140 185Q137 179 136 176L136 176Q129 141 115 116L115 116Q145 128 169 135L169 135Q171 135 176 136L176 136Q182 136 185 137L185 137Q187 138 187 141L187 141Q187 145 192 145L192 145Q218 142 219 131L219 131Q219 127 215 124L215 124Q213 123 208 122L208 122Q203 121 201 119L201 119Q199 118 191 112L191 112Q168 95 162 95L162 95Q160 95 160 98Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni20320'
  },
  '&#x7B80;': {
    unicode: '&#x7B80;',
    glyphName: 'uni7B80',
    d:
      'M172-26L172-26Q155-11 148-1L148-1Q145 1 150 0L150 0Q159-8 171-15L171-15Q173-15 173-15L173-15Q179-15 183 13L183 13Q183 15 183 16L183 16Q184 36 178 76L178 76Q177 89 176 95L176 95Q176 96 176 98L176 98Q175 111 170 111L170 111Q166 112 158 112L158 112Q156 112 154 112L154 112Q138 111 126 107L126 107Q123 107 118 105L118 105Q112 103 109 103L109 103Q102 103 102 107L102 107Q104 114 109 115L109 115Q110 115 112 114L112 114Q113 113 114 113L114 113Q115 113 116 113L116 113Q150 124 172 125L172 125Q188 121 191 111L191 111Q191 111 191 109L191 109Q190 107 190 106L190 106Q190 106 190 104L190 104Q191 96 193 81L193 81Q199 35 196 10L196 10Q196 9 195 5L195 5Q188-29 178-29L178-29Q177-29 177-29L177-29Q175-29 172-26ZM67 49L67 49Q64-5 56-7L56-7Q48-7 48 0L48 0Q51 17 54 52L54 52Q56 69 57 78L57 78Q57 80 56 83L56 83Q54 86 54 88L54 88Q55 95 60 95L60 95Q67 93 71 79L71 79Q71 74 69 64L69 64Q68 54 67 49ZM91 30L91 30Q91 53 93 74L93 74Q115 85 131 89L131 89Q143 87 145 78L145 78Q145 75 144 70L144 70Q142 64 142 61L142 61Q142 57 142 49L142 49Q142 32 138 23L138 23Q137 21 135 21L135 21Q134 21 134 21L134 21Q132 21 128 21L128 21Q123 22 120 22L120 22Q117 22 109 21L109 21Q102 20 98 20L98 20Q90 20 91 30ZM123 50L123 50Q120 50 109 47L109 47Q105 46 103 46L103 46Q103 44 103 41L103 41Q102 33 103 30L103 30Q119 30 128 35L128 35Q128 38 128 40L128 40Q128 40 128 41L128 41Q129 48 126 49L126 49Q126 50 123 50ZM103 64L103 64Q103 61 103 60L103 60Q103 55 107 57L107 57Q108 58 114 59L114 59Q119 61 120 61L120 61Q126 63 127 63L127 63Q130 64 129 67L129 67Q129 71 129 74L129 74Q128 77 125 77L125 77Q124 77 122 77L122 77Q120 76 119 76L119 76Q117 75 112 74L112 74Q102 71 103 64ZM75 119L75 119Q75 122 82 123L82 123Q96 121 96 112L96 112Q96 109 91 109L91 109Q77 112 75 119ZM28 128L28 128Q28 128 28 129L28 129Q53 150 57 177L57 177Q55 182 55 187L55 187Q55 190 57 189L57 189Q59 189 62 187L62 187Q64 185 66 185L66 185Q67 185 68 184L68 184Q75 183 77 177L77 177Q78 173 73 171L73 171Q71 171 65 159L65 159Q55 139 47 132L47 132Q38 125 32 125L32 125Q29 125 28 128ZM73 149L73 149Q74 153 77 153L77 153L78 153Q79 153 80 153L80 153Q97 150 97 143L97 143Q96 138 91 136L91 136Q76 140 73 149ZM158 156L158 156Q159 159 163 161L163 161Q189 154 196 143L196 143Q195 137 188 136L188 136Q175 143 158 156ZM123 141L123 141Q123 142 123 142L123 142Q142 164 149 198L149 198Q149 201 146 205L146 205Q143 208 143 210L143 210Q143 214 150 214L150 214Q151 214 153 214L153 214Q154 213 156 211L156 211Q165 205 165 200L165 200Q163 196 160 186L160 186Q150 153 134 143L134 143Q131 140 126 139L126 139Q123 139 123 141ZM156 170L156 170Q155 174 167 178L167 178Q170 179 175 181L175 181Q186 186 205 192L205 192Q211 195 218 196L218 196Q222 195 223 190L223 190Q223 183 213 182L213 182Q210 182 209 182L209 182Q200 181 196 179L196 179Q186 177 171 172L171 172Q156 166 156 170ZM82 175L82 175Q91 179 110 188L110 188Q112 188 112 188L112 188Q119 187 120 181L120 181Q120 178 116 176L116 176Q114 176 104 173L104 173Q93 170 91 169L91 169Q87 166 82 166L82 166Q76 166 75 168L75 168Q75 172 82 175Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni31616'
  },
  '&#x786C;': {
    unicode: '&#x786C;',
    glyphName: 'uni786C',
    d:
      'M253 2L253 2Q251-2 236-5L236-5Q218-8 209-5L209-5Q201-4 183 9L183 9Q177 13 154 34L154 34Q133 5 106-3L106-3L105-3Q98-2 98 0L98 0Q113 8 116 10L116 10Q139 28 145 44L145 44Q136 54 123 61L123 61Q116 64 114 67L114 67Q115 71 125 71L125 71Q125 91 122 108L122 108Q122 110 121 113L121 113Q119 117 119 120L119 120Q119 121 119 123L119 123Q123 124 126 124L126 124Q135 127 154 136L154 136Q154 137 154 138L154 138Q153 141 153 150L153 150Q153 150 150 155L150 155Q146 163 145 163L145 163Q141 163 133 159L133 159Q126 154 121 154L121 154Q115 155 113 160L113 160Q113 161 115 164L115 164Q118 164 121 164L121 164Q133 167 155 178L155 178Q169 184 176 187L176 187Q178 188 183 190L183 190Q191 193 196 193L196 193Q202 193 202 185L202 185Q202 180 186 178L186 178Q183 177 182 177L182 177Q178 177 153 166L153 166Q153 163 159 161L159 161Q165 159 165 156L165 156L165 141Q172 143 179 147L179 147Q184 150 188 150L188 150Q191 150 194 147L194 147Q196 145 197 144L197 144Q198 143 199 142L199 142Q202 140 202 136L202 136Q202 130 197 117L197 117Q191 103 191 96L191 96L193 95Q193 95 194 92L194 92Q195 89 195 88L195 88L193 84Q187 83 184 82L184 82Q182 82 175 80L175 80Q167 78 165 77L165 77Q165 76 164 72L164 72Q160 47 158 44L158 44Q200 7 218 7L218 7Q221 7 227 8L227 8Q234 8 236 8L236 8Q237 8 243 8L243 8Q248 7 249 7L249 7Q253 5 253 2ZM63 32L63 32Q63 40 63 49L63 49Q63 51 62 56L62 56Q61 69 59 75L59 75Q59 77 58 78L58 78Q29 40 7 31L7 31Q5 31 5 32L5 32Q5 33 18 48L18 48Q29 61 30 63L30 63Q66 107 76 137L76 137Q76 142 68 147L68 147Q66 147 62 146L62 146Q58 146 57 146L57 146Q51 146 50 149L50 149Q53 153 68 158L68 158Q75 160 77 161L77 161Q80 162 86 167L86 167Q88 168 89 169L89 169Q100 175 108 177L108 177Q115 176 116 170L116 170Q116 165 115 164L115 164Q110 164 106 164L106 164Q105 164 101 162L101 162Q97 160 96 160L96 160Q96 160 93 158L93 158Q90 157 89 156L89 156Q89 156 87 155L87 155Q82 153 80 151L80 151Q82 147 89 143L89 143Q94 141 94 137L94 137Q94 134 89 130L89 130Q88 129 87 128L87 128Q78 112 73 100L73 100Q90 105 93 108L93 108Q93 108 93 109L93 109Q95 120 102 119L102 119Q113 114 116 102L116 102Q116 98 113 95L113 95Q110 93 109 91L109 91Q106 82 106 79L106 79Q106 78 107 76L107 76Q108 74 108 72L108 72Q108 66 100 64L100 64Q97 63 96 63L96 63Q95 63 93 62L93 62Q77 56 74 51L74 51Q75 40 72 28L72 28Q72 24 69 25L69 25Q65 25 63 31L63 31Q63 32 63 32ZM135 67L135 67Q138 60 149 53L149 53Q150 55 151 63L151 63Q152 70 152 72L152 72Q143 70 135 67ZM74 64L74 64Q85 68 91 73L91 73Q93 80 96 95L96 95Q96 98 94 97L94 97Q83 95 71 88L71 88Q71 77 74 64ZM135 92L135 92Q135 90 136 85L136 85Q136 80 136 77L136 77Q141 78 142 79L142 79L153 84Q154 92 154 100L154 100Q153 100 146 97L146 97Q145 97 145 97L145 97Q144 98 143 99L143 99Q142 100 142 102L142 102Q141 105 149 108L149 108Q152 109 154 110L154 110Q154 118 154 125L154 125Q153 125 150 124L150 124Q138 120 131 116L131 116Q132 109 133 101L133 101Q135 96 135 92ZM166 89L166 89Q168 90 175 93L175 93Q179 95 180 95L180 95Q181 99 182 105L182 105Q183 112 183 115L183 115Q183 117 185 122L185 122Q187 128 187 132L187 132Q187 134 183 134L183 134Q182 134 180 134L180 134Q174 133 165 129L165 129Q165 121 165 113L165 113Q166 113 167 114L167 114Q179 117 179 111L179 111Q178 107 177 107L177 107Q173 104 166 103L166 103Q166 96 166 89Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni30828'
  },
  '&#x7B14;': {
    unicode: '&#x7B14;',
    glyphName: 'uni7B14',
    d:
      'M101 24L101 24Q91 20 70 11L70 11Q52 2 44 0L44 0Q39-3 38-3L38-3Q38-3 37-3L37-3Q26-2 25 6L25 6Q25 10 30 10L30 10L31 10Q36 8 37 8L37 8Q42 8 56 15L56 15Q57 16 58 16L58 16Q77 25 94 32L94 32Q95 33 98 34L98 34Q101 36 102 37L102 37Q103 39 103 51L103 51Q99 48 94 47L94 47Q90 45 86 45L86 45Q82 46 81 49L81 49Q81 52 101 61L101 61Q104 63 105 63L105 63Q105 64 106 69L106 69Q106 73 106 74L106 74Q106 75 106 77L106 77Q105 79 105 79L105 79Q104 79 95 74L95 74Q81 67 80 67L80 67Q74 67 74 70L74 70Q91 82 94 84L94 84Q97 86 104 91L104 91Q118 99 124 105L124 105Q125 105 125 107L125 107Q122 107 122 109L122 109Q125 121 134 146L134 146Q144 174 147 189L147 189Q147 190 143 194L143 194Q137 199 136 202L136 202Q136 207 142 207L142 207Q145 207 151 202L151 202Q153 200 154 199L154 199Q155 198 157 198L157 198Q163 196 163 192L163 192Q163 190 161 186L161 186Q159 184 159 182L159 182Q153 167 147 147L147 147Q149 147 153 149L153 149Q155 151 156 151L156 151Q157 152 159 153L159 153Q194 172 205 172L205 172Q207 172 208 172L208 172Q210 170 211 165L211 165Q211 162 193 157L193 157Q184 154 182 153L182 153Q174 150 168 143L168 143Q170 139 174 134L174 134Q175 134 177 133L177 133Q187 128 187 122L187 122Q187 117 185 116L185 116Q184 116 181 117L181 117Q180 118 173 118L173 118Q169 121 167 121L167 121Q167 122 167 122L167 122Q166 123 164 127L164 127Q163 128 162 130L162 130Q155 136 154 137L154 137Q148 137 145 138L145 138Q138 131 131 115L131 115Q133 113 140 111L140 111Q151 108 151 103L151 103Q151 96 137 94L137 94Q134 94 133 94L133 94Q131 93 125 90L125 90Q117 87 114 85L114 85Q125 84 125 74L125 74Q130 75 135 78L135 78Q138 80 142 80L142 80Q148 80 147 72L147 72Q148 67 133 63L133 63Q124 60 120 58L120 58Q118 52 118 46L118 46Q119 44 119 44L119 44Q136 53 152 55L152 55Q158 55 158 49L158 49Q158 41 146 41L146 41Q127 33 116 29L116 29Q114 26 114 12L114 12Q112-17 152-14L152-14Q156-14 164-13L164-13Q172-12 175-12L175-12Q175-12 180-11L180-11Q187-10 188-10L188-10Q189-10 192-9L192-9Q215-6 221 6L221 6Q221 7 222 8L222 8Q225 19 225 29L225 29Q225 31 227 31L227 31Q229 31 231 28L231 28Q232 27 232 27L232 27Q239-4 227-13L227-13Q216-26 159-26L159-26Q133-26 116-20L116-20Q101-12 101 22L101 22Q101 24 101 24ZM31 95L31 95Q31 97 37 99L37 99Q39 100 39 100L39 100Q74 133 72 173L72 173Q73 175 76 175L76 175Q87 172 90 163L90 163Q90 160 87 154L87 154Q84 150 84 148L84 148Q83 143 81 140L81 140Q98 149 104 152L104 152Q105 152 107 153L107 153Q113 157 117 157L117 157Q124 158 123 152L123 152Q123 149 112 144L112 144Q95 136 95 130L95 130Q95 127 100 124L100 124Q108 121 108 115L108 115Q107 107 101 108L101 108Q93 107 82 127L82 127Q81 127 80 126L80 126Q77 125 75 124L75 124Q60 106 40 93L40 93Q39 93 38 93L38 93Q38 93 37 93L37 93Q31 92 31 95Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni31508'
  },
  '&#x6977;': {
    unicode: '&#x6977;',
    glyphName: 'uni6977',
    d:
      'M151-1L151-1Q147-1 138-4L138-4Q129-6 124-6L124-6Q120-5 119-2L119-2Q119 0 118 6L118 6Q115 30 110 41L110 41Q109 44 105 48L105 48Q101 53 101 56L101 56Q102 60 106 61L106 61Q106 61 108 61L108 61Q110 61 111 60L111 60Q116 65 131 89L131 89Q131 90 131 91L131 91Q130 100 137 100L137 100Q138 100 139 99L139 99Q140 98 143 97L143 97Q144 96 145 96L145 96Q149 93 149 88L149 88Q149 86 138 76L138 76Q129 68 129 67L129 67Q123 62 119 56L119 56L119 55Q125 57 138 61L138 61Q161 70 174 71L174 71Q184 68 192 61L192 61Q192 60 192 58L192 58Q192 55 189 50L189 50Q188 48 187 47L187 47Q186 42 184 31L184 31Q179 4 175-9L175-9Q173-13 170-13L170-13Q166-13 162-8L162-8Q157-1 151-1ZM55 19L55 19Q60 19 61 20L61 20Q61 21 62 23L62 23Q62 26 62 26L62 26Q64 60 62 79L62 79Q45 57 26 47L26 47Q23 47 23 50L23 50Q27 54 31 58L31 58Q61 95 63 111L63 111Q63 113 63 114L63 114Q56 111 42 105L42 105Q31 99 26 97L26 97Q15 93 15 101L15 101Q37 115 61 124L61 124Q67 127 66 132L66 132Q66 138 67 150L67 150Q67 162 67 167L67 167Q67 176 62 179L62 179Q59 181 59 183L59 183Q59 188 71 188L71 188Q74 189 77 186L77 186Q79 176 77 159L77 159Q77 142 78 134L78 134Q90 136 91 130L91 130Q92 126 83 123L83 123Q79 122 78 121L78 121Q77 117 77 103L77 103Q77 100 79 100L79 100Q81 99 85 98L85 98Q92 94 96 93L96 93Q100 92 100 87L100 87Q99 79 94 80L94 80Q92 80 87 83L87 83Q81 87 78 87L78 87Q76 87 76 83L76 83Q78 33 72 6L72 6Q72 3 68 2L68 2Q56 3 55 19ZM130 9L130 9Q130 6 132 6L132 6Q144 9 155 9L155 9Q156 9 157 9L157 9Q163 10 165 7L165 7Q166 16 169 34L169 34Q172 47 173 54L173 54Q173 54 173 55L173 55Q174 58 171 58L171 58Q148 54 124 46L124 46Q125 44 127 38L127 38Q128 36 128 35L128 35Q131 36 136 37L136 37Q147 40 152 41L152 41Q157 41 160 38L160 38Q164 30 153 28L153 28Q151 28 150 28L150 28Q149 28 144 26L144 26Q132 23 131 22L131 22Q131 20 130 15L130 15Q130 10 130 9ZM160 96L160 96Q150 98 146 116L146 116Q146 117 146 118L146 118Q143 153 145 188L145 188Q145 189 142 190L142 190Q138 192 138 196L138 196Q138 198 141 200L141 200Q142 200 143 201L143 201Q149 199 156 198L156 198Q160 197 160 194L160 194Q160 189 159 178L159 178Q157 158 157 147L157 147Q158 146 160 147L160 147Q161 147 161 147L161 147Q161 147 163 148L163 148Q172 154 173 158L173 158Q173 159 173 161L173 161Q172 168 175 169L175 169Q177 169 179 169L179 169Q198 170 198 159L198 159Q198 155 190 154L190 154Q189 153 188 153L188 153Q187 153 182 150L182 150Q176 148 175 147L175 147Q170 143 158 137L158 137Q158 127 160 118L160 118Q159 104 178 105L178 105Q180 105 183 105L183 105Q225 105 228 127L228 127Q228 128 228 131L228 131Q228 137 232 137L232 137Q238 141 237 112L237 112Q233 102 218 97L218 97Q189 90 160 96ZM101 96L101 96Q102 109 102 122L102 122Q103 141 100 157L100 157Q100 159 99 161L99 161Q97 164 97 165L97 165Q97 167 102 169L102 169Q103 170 103 170L103 170Q104 169 106 169L106 169Q111 166 114 164L114 164Q115 164 115 161L115 161Q115 159 114 158L114 158Q114 157 114 156L114 156Q114 150 114 147L114 147Q123 151 134 154L134 154Q140 154 139 147L139 147Q139 144 135 142L135 142Q134 141 133 141L133 141Q129 140 123 137L123 137Q119 135 117 134L117 134Q115 133 115 130L115 130Q115 119 114 115L114 115Q114 112 116 113L116 113Q118 114 121 117L121 117Q132 124 136 128L136 128Q141 128 140 124L140 124Q121 98 106 91L106 91Q102 90 101 96Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni26999'
  },
  '&#x4E66;': {
    unicode: '&#x4E66;',
    glyphName: 'uni4E66',
    d:
      'M108-14L108-14L107-12Q106-11 106 1L106 1Q106 18 107 21L107 21Q109 56 106 85L106 85Q97 80 71 71L71 71Q63 66 52 66L52 66Q41 67 40 72L40 72Q40 73 43 75L43 75Q44 76 44 76L44 76Q56 76 71 82L71 82Q73 83 76 84L76 84Q97 90 106 95L106 95Q106 112 106 133L106 133Q103 132 99 129L99 129Q94 125 89 125L89 125Q82 126 82 130L82 130Q82 131 83 132L83 132Q84 134 84 134L84 134Q91 136 105 144L105 144Q105 150 105 164L105 164Q104 177 104 183L104 183Q104 185 99 186L99 186Q92 187 92 191L92 191Q93 197 111 199L111 199Q119 199 119 190L119 190Q119 188 118 184L118 184Q117 181 117 180L117 180Q117 166 119 150L119 150Q128 153 142 159L142 159Q144 160 145 163L145 163Q147 169 151 169L151 169Q163 166 169 162L169 162Q171 160 171 156L171 156Q171 151 166 148L166 148Q166 148 165 147L165 147Q165 146 163 144L163 144Q155 127 154 124L154 124Q148 114 141 113L141 113Q138 114 138 116L138 116L138 117L143 133Q143 135 145 139L145 139Q147 144 147 147L147 147Q132 147 119 139L119 139Q119 132 120 112L120 112Q120 103 120 101L120 101Q122 102 126 103L126 103Q136 107 141 108L141 108Q177 123 201 122L201 122Q206 122 212 119L212 119Q211 119 213 118L213 118Q214 117 216 116L216 116Q224 112 224 105L224 105Q224 102 221 98L221 98Q218 95 217 93L217 93Q216 90 213 85L213 85Q197 53 181 43L181 43Q180 43 179 41L179 41Q176 39 175 39L175 39Q164 40 150 55L150 55Q148 57 144 62L144 62L144 67L156 57Q158 57 162 55L162 55Q168 52 172 52L172 52Q190 61 205 104L205 104Q205 109 193 110L193 110Q165 111 120 91L120 91Q119 79 120 57L120 57Q120 35 120 24L120 24Q120 23 122 21L122 21Q124 18 124 16L124 16L124 15Q124 15 123 12L123 12Q122 7 122 6L122 6Q122 5 121-1L121-1Q119-11 119-13L119-13Q115-20 108-14ZM173 186L173 186Q171 189 171 190L171 190Q171 193 179 194L179 194Q183 194 190 191L190 191Q194 189 196 188L196 188Q198 187 202 185L202 185Q216 182 215 173L215 173Q215 166 207 166L207 166Q204 166 194 173L194 173Q188 178 186 179L186 179Q185 180 180 183L180 183Q174 186 173 186Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni20070'
  },
  '&#x5B57;': {
    unicode: '&#x5B57;',
    glyphName: 'uni5B57',
    d:
      'M86-4L86-4Q86-3 88-3L88-3Q101-8 113-8L113-8Q119-8 119-7L119-7Q136 19 130 66L130 66Q112 62 77 53L77 53Q68 52 66 50L66 50Q65 50 64 50L64 50Q56 51 55 58L55 58Q55 59 55 59L55 59Q58 59 59 60L59 60Q105 70 127 77L127 77Q123 89 113 98L113 98Q112 98 112 100L112 100Q112 102 116 104L116 104Q117 105 118 106L118 106Q123 117 128 124L128 124L128 126Q118 126 98 113L98 113Q97 112 96 111L96 111Q90 107 87 107L87 107Q80 108 79 113L79 113Q87 129 95 132L95 132Q99 132 101 128L101 128Q102 126 103 126L103 126Q104 127 104 127L104 127Q109 129 120 133L120 133Q128 137 132 138L132 138Q135 139 137 144L137 144Q140 149 145 149L145 149Q146 149 146 149L146 149Q147 148 150 146L150 146Q161 141 161 136L161 136Q161 130 152 127L152 127Q148 125 146 124L146 124Q130 109 126 102L126 102Q126 100 131 94L131 94Q139 85 141 79L141 79Q166 82 189 82L189 82Q201 82 201 75L201 75Q202 66 193 66L193 66Q165 69 143 68L143 68Q150 33 139 1L139 1Q132-16 121-21L121-21Q101-14 86-4ZM35 122L35 122Q35 123 35 124L35 124Q37 129 41 139L41 139Q46 153 49 159L49 159Q51 163 54 162L54 162Q57 162 60 157L60 157Q62 152 66 152L66 152Q73 153 114 171L114 171Q113 172 112 173L112 173Q109 176 108 177L108 177Q108 178 108 181L108 181Q109 184 109 186L109 186Q109 187 109 190L109 190Q108 192 102 196L102 196Q94 201 94 205L94 205Q94 209 99 209L99 209Q100 209 101 209L101 209Q103 209 112 205L112 205Q122 202 123 201L123 201Q128 200 128 195L128 195Q128 195 128 194L128 194Q128 193 127 191L127 191Q126 187 125 175L125 175Q155 185 184 185L184 185Q198 185 218 169L218 169Q222 167 222 162L222 162Q220 155 215 154L215 154Q208 155 195 151L195 151Q185 147 180 147L180 147Q177 147 175 147L175 147Q173 149 173 150L173 150Q173 152 185 159L185 159Q193 164 195 166L195 166Q194 168 188 170L188 170Q187 171 186 171L186 171Q183 171 175 173L175 173Q170 173 161 173L161 173Q137 171 89 151L89 151Q86 150 84 149L84 149Q82 148 70 143L70 143Q55 136 54 135L54 135L48 118Q46 115 42 114L42 114Q36 115 35 122Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni23383'
  },
  '&#x4F53;': {
    unicode: '&#x4F53;',
    glyphName: 'uni4F53',
    d:
      'M130-22L130-22Q124-16 124-11L124-11Q124-8 125-8L125-8Q126-9 127-10L127-10Q130-9 130 0L130 0Q130 5 128 24L128 24Q127 34 127 38L127 38Q121 37 114 34L114 34Q105 30 99 30L99 30Q92 30 92 35L92 35Q92 39 102 41L102 41Q106 42 107 43L107 43Q112 45 126 51L126 51Q126 56 125 71L125 71Q124 91 124 99L124 99Q86 34 71 35L71 35Q70 35 70 35L70 35Q70 35 69 36L69 36Q69 39 77 47L77 47Q80 50 81 51L81 51Q109 94 118 119L118 119Q106 113 100 112L100 112Q98 111 96 109L96 109Q91 105 87 105L87 105Q82 106 81 111L81 111Q81 113 86 116L86 116Q89 117 90 118L90 118Q96 120 107 125L107 125Q120 130 123 131L123 131Q123 156 123 180L123 180Q123 186 123 191L123 191Q122 193 117 194L117 194Q111 195 111 199L111 199Q111 204 126 204L126 204Q127 204 127 204L127 204Q131 204 134 204L134 204Q134 204 135 203L135 203Q139 200 139 197L139 197Q139 189 138 173L138 173Q136 157 136 149L136 149Q136 143 136 136L136 136Q140 137 152 142L152 142Q152 143 152 143L152 143Q152 144 151 146L151 146Q150 147 150 148L150 148Q152 150 179 153L179 153Q188 154 187 144L187 144Q187 139 175 138L175 138Q173 137 172 137L172 137Q152 132 137 126L137 126Q137 125 137 123L137 123Q137 119 147 109L147 109Q167 83 195 68L195 68Q196 67 198 66L198 66Q205 60 209 59L209 59Q215 57 228 55L228 55Q241 53 247 52L247 52Q251 51 251 46L251 46Q250 42 245 41L245 41Q243 41 228 41L228 41Q214 40 211 40L211 40Q210 40 209 39L209 39Q201 39 190 48L190 48Q187 50 182 56L182 56Q148 87 138 101L138 101Q139 91 140 71L140 71Q141 60 141 56L141 56Q144 56 149 58L149 58Q160 60 165 60L165 60Q172 59 173 55L173 55Q173 49 172 48L172 48Q172 46 168 46L168 46Q165 46 142 42L142 42Q142 5 143-8L143-8Q143-8 143-13L143-13Q142-21 142-22L142-22Q142-23 141-24L141-24Q140-26 139-26L139-26L138-26Q133-26 130-22ZM44 8L44 8Q45 20 46 24L46 24Q48 26 48 28L48 28Q48 29 48 30L48 30Q48 31 49 38L49 38Q50 45 50 46L50 46Q50 53 50 67L50 67Q50 77 50 87L50 87Q49 89 49 95L49 95Q49 106 46 108L46 108Q27 84 7 73L7 73L5 76Q32 104 50 140L50 140Q50 142 54 151L54 151Q60 164 60 166L60 166Q60 167 60 167L60 167Q58 168 52 174L52 174Q51 176 51 177L51 177Q51 180 58 180L58 180Q59 180 60 180L60 180Q62 179 63 178L63 178Q64 177 67 176L67 176Q77 173 77 166L77 166Q77 163 71 158L71 158Q70 157 69 156L69 156Q67 153 65 145L65 145Q61 135 58 130L58 130Q58 128 56 126L56 126Q53 122 53 119L53 119Q56 116 57 115L57 115Q63 105 63 67L63 67Q63 64 63 63L63 63Q63 38 57 0L57 0Q55-1 54-1L54-1Q47 0 44 8Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni20307'
  },
  '&#x6D4B;': {
    unicode: '&#x6D4B;',
    glyphName: 'uni6D4B',
    d:
      'M175 14L175 14Q176 14 181 9L181 9Q191-2 198-4L198-4Q198-5 199-4L199-4Q204 1 206 16L206 16Q207 22 207 24L207 24Q207 35 205 57L205 57Q204 68 204 73L204 73Q204 91 201 128L201 128Q197 173 198 196L198 196Q198 200 193 204L193 204Q188 207 188 210L188 210Q189 212 189 213L189 213Q190 214 193 214L193 214Q211 209 213 204L213 204Q213 199 212 188L212 188Q211 176 211 170L211 170Q212 151 215 113L215 113Q217 74 218 55L218 55Q218 50 219 41L219 41Q220 31 220 25L220 25Q221 0 207-20L207-20Q205-22 205-22L205-22Q196-21 177 5L177 5Q175 8 175 14ZM73 11L73 11Q73 12 73 12L73 12Q94 29 103 74L103 74Q108 101 109 127L109 127Q109 130 107 135L107 135Q105 138 105 139L105 139Q105 143 114 144L114 144Q122 143 123 138L123 138Q123 133 121 123L121 123Q120 120 120 118L120 118Q120 105 119 91L119 91Q119 91 118 86L118 86Q116 82 116 81L116 81Q113 69 113 66L113 66Q113 65 124 59L124 59Q127 57 128 56L128 56Q133 52 134 52L134 52Q134 51 138 46L138 46Q146 37 146 36L146 36Q146 27 140 27L140 27Q133 27 125 40L125 40Q117 52 110 54L110 54Q109 52 108 50L108 50Q108 48 106 45L106 45Q99 24 83 11L83 11Q81 10 80 9L80 9Q80 8 78 8L78 8Q73 8 73 11ZM36 23L36 23Q36 26 37 32L37 32Q38 40 37 45L37 45Q38 47 39 48L39 48Q46 45 54 63L54 63Q60 75 64 76L64 76Q65 75 65 72L65 72Q65 66 61 57L61 57Q59 54 58 52L58 52Q57 47 53 38L53 38Q47 26 47 18L47 18Q47 16 44 16L44 16Q37 17 36 23ZM77 63L77 63Q77 72 79 89L79 89Q81 106 81 114L81 114Q81 118 81 120L81 120Q81 122 79 133L79 133Q78 143 77 145L77 145Q74 152 63 155L63 155Q57 156 57 158L57 158Q63 159 64 161L64 161Q54 170 48 175L48 175Q48 176 48 176L48 176Q48 178 50 180L50 180Q53 180 56 180L56 180Q69 172 74 169L74 169Q81 164 87 156L87 156Q98 165 120 170L120 170Q122 171 124 173L124 173Q127 177 130 177L130 177Q133 177 136 175L136 175Q137 174 138 173L138 173Q139 173 142 172L142 172Q150 170 150 164L150 164Q150 161 145 156L145 156Q143 150 143 144L143 144Q143 141 145 141L145 141Q146 112 146 83L146 83Q146 82 145 81L145 81Q145 81 146 79L146 79Q146 77 146 76L146 76Q147 73 147 72L147 72Q147 64 142 64L142 64Q133 63 134 68L134 68Q134 75 133 88L133 88Q132 101 132 107L132 107Q132 109 132 110L132 110Q130 136 130 160L130 160Q129 161 129 161L129 161Q129 161 128 161L128 161Q109 161 88 147L88 147Q88 145 87 145L87 145Q87 144 90 142L90 142Q92 140 92 138L92 138Q92 131 93 119L93 119Q94 107 94 101L94 101Q94 99 94 96L94 96Q93 95 91 80L91 80Q90 74 90 72L90 72Q86 58 81 58L81 58Q76 58 77 63ZM165 66L165 66Q165 84 165 104L165 104Q165 117 162 132L162 132Q162 133 161 135L161 135Q159 137 159 139L159 139Q159 144 165 144L165 144Q177 142 178 134L178 134Q178 133 178 131L178 131Q177 129 177 128L177 128Q177 121 178 106L178 106Q179 91 179 83L179 83Q179 75 179 65L179 65Q177 58 173 58L173 58Q166 59 165 66ZM25 109L25 109Q26 113 27 113L27 113L48 113Q53 112 54 107L54 107Q54 102 47 101L47 101Q45 101 45 101L45 101Q44 102 38 103L38 103Q34 105 33 105L33 105Q26 106 25 109Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni27979'
  },
  '&#x8BD5;': {
    unicode: '&#x8BD5;',
    glyphName: 'uni8BD5',
    d:
      'M164 47L164 47Q159 45 150 41L150 41Q147 40 135 33L135 33Q101 16 95 13L95 13Q90 8 81 8L81 8Q71 7 68 13L68 13Q69 17 79 19L79 19Q83 20 84 21L84 21Q95 25 102 28L102 28Q110 34 110 66L110 66Q108 66 100 64L100 64Q95 62 93 62L93 62Q93 62 89 56L89 56Q80 44 78 42L78 42Q69 33 60 24L60 24Q57 18 47 6L47 6Q38 8 37 12L37 12Q37 13 37 13L37 13Q49 36 52 60L52 60Q52 68 52 75L52 75Q52 76 53 82L53 82Q54 88 54 88L54 88Q54 90 53 96L53 96Q53 100 53 101L53 101Q53 101 52 101L52 101Q45 101 30 92L30 92Q18 84 13 84L13 84Q8 84 8 90L8 90Q8 93 10 94L10 94Q14 95 15 95L15 95Q29 100 51 112L51 112Q54 119 59 119L59 119Q69 118 68 109L68 109Q68 107 67 102L67 102Q66 96 66 93L66 93Q66 86 64 72L64 72Q62 51 62 41L62 41Q63 41 64 40L64 40Q67 42 68 43L68 43Q70 45 73 48L73 48Q85 59 89 66L89 66Q90 68 90 69L90 69Q116 83 134 90L134 90Q143 90 143 82L143 82Q143 77 135 75L135 75Q130 74 128 72L128 72Q126 66 126 60L126 60Q123 52 121 38L121 38Q129 42 144 48L144 48Q155 53 160 55L160 55Q154 70 152 76L152 76Q151 78 151 79L151 79Q149 84 145 96L145 96Q139 110 137 117L137 117Q135 116 127 112L127 112Q120 109 118 108L118 108Q117 107 114 106L114 106Q102 99 95 99L95 99Q88 100 88 104L88 104Q88 109 98 111L98 111Q100 111 101 111L101 111Q112 113 134 128L134 128Q134 136 130 145L130 145Q129 149 128 157L128 157Q124 176 124 186L124 186Q124 187 120 186L120 186Q116 186 112 186L112 186Q104 186 104 190L104 190Q105 194 108 194L108 194Q109 195 114 196L114 196Q120 198 120 198L120 198Q123 199 126 200L126 200Q127 201 129 201L129 201Q137 200 137 197L137 197Q137 197 137 195L137 195Q136 193 136 192L136 192Q136 170 146 134L146 134Q154 136 162 142L162 142Q163 143 165 144L165 144Q169 146 172 146L172 146Q179 145 179 140L179 140Q179 138 177 136L177 136Q176 135 176 134L176 134Q170 133 165 130L165 130Q156 128 149 122L149 122Q179 18 231 0L231 0Q232 0 232 0L232 0Q236 0 237 21L237 21Q238 37 240 37L240 37Q244 37 245 28L245 28Q245 23 247 15L247 15Q248 5 248 1L248 1Q247-16 239-16L239-16Q199-12 164 47ZM65 162L65 162Q66 163 68 166L68 166Q67 168 60 173L60 173Q51 178 51 181L51 181Q51 183 53 185L53 185Q86 176 88 165L88 165Q88 162 87 159L87 159Q84 159 78 158L78 158Q72 157 69 157L69 157Q68 157 66 158L66 158Q65 159 65 162ZM161 179L161 179Q161 184 166 185L166 185Q167 185 171 184L171 184Q195 181 195 170L195 170Q195 164 191 164L191 164Q183 164 177 168L177 168Q175 170 173 171L173 171Q172 172 169 172L169 172Q161 174 161 179Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni35797'
  },
  '&#x31;': {
    unicode: '&#x31;',
    glyphName: 'uni31',
    d: 'M54 141L54 141L51 149Q78 158 94 178L94 178L103 178L63 0L51 0L87 159Q71 147 54 141Z',
    horizAdvX: 140,
    vertAdvY: 256,
    name: 'uni49'
  },
  '&#xFF0C;': {
    unicode: '&#xFF0C;',
    glyphName: 'uniFF0C',
    d: 'M66 11L66 11L79 11Q74-17 53-27L53-27L50-23Q66-7 66 11Z',
    horizAdvX: 256,
    vertAdvY: 256,
    name: 'uni65292'
  },
  '&#x32;': {
    unicode: '&#x32;',
    glyphName: 'uni32',
    d:
      'M51 163L51 163L54 172Q56 172 57 173L57 173Q77 178 89 178L89 178Q145 175 146 134L146 134Q145 79 20 10L20 10Q71 7 121 10L121 10L119 1L104 1Q94 0 88 0L88 0L71 0L60 0Q11-2 8 15L8 15Q136 83 134 141L134 141Q133 168 89 169L89 169Q77 169 54 164L54 164Q55 164 54 164L54 164Q53 164 51 163Z',
    horizAdvX: 140,
    vertAdvY: 256,
    name: 'uni50'
  },
  '&#x33;': {
    unicode: '&#x33;',
    glyphName: 'uni33',
    d:
      'M54 91L54 91L53 102Q54 102 56 104L56 104Q60 107 63 109L63 109Q134 153 137 163L137 163L136 164Q116 167 45 164L45 164L48 173Q66 175 87 175L87 175Q95 175 120 174L120 174Q132 173 138 173L138 173Q139 173 139 172L139 172Q140 171 140 170L140 170Q146 162 146 160L146 160Q145 146 71 102L71 102Q130 99 128 61L128 61Q124 5 35 0L35 0Q26 0 10 0L10 0L8 0L10 9Q20 6 38 6L38 6Q112 14 116 61L116 61Q113 97 54 91Z',
    horizAdvX: 140,
    vertAdvY: 256,
    name: 'uni51'
  }
}

var font = fontCarrier2.create(options)
font.setFontface(fontface)

Object.keys(glyphMap).forEach(key => {
  var tmplGlyph = new fontCarrier2.Glyph(glyphMap[key])
  tmplGlyph.__viewbox = font.__viewbox
  font.setGlyph(key, tmplGlyph)
})

font.output({
  path: './test/font-4'
})
