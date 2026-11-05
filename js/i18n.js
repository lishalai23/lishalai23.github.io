/* ============================================================
   全站中英文双语切换 + 二维码弹窗
   · 纯静态内置语言包，无任何在线翻译 / LLM，断网可用
   · 用法：在需要翻译的元素上加 data-i18n="键名"
   · 语言记忆：localStorage「site-lang」，默认中文 zh
   · 切换按钮：带 data-lang-toggle 的按钮，中文态显示 EN，英文态显示 中
   ============================================================ */

/* ---------------- 语言包（键: { zh, en }） ---------------- */
var I18N = {
  /* ===== 通用导航 ===== */
  "nav.home":      { zh: "首页",       en: "Home" },
  "nav.portfolio": { zh: "作品集",     en: "Portfolio" },
  "nav.about":     { zh: "关于",       en: "About" },
  "nav.contact":   { zh: "联系",       en: "Contact" },
  "nav.favorites": { zh: "收藏夹",     en: "Favorites" },
  "nav.tagline":   { zh: "Urban Observer &middot; 城市漫游手记", en: "Urban Observer &middot; Notes from the City" },

  /* ===== 浏览器标题 ===== */
  "t.index":       { zh: "城市漫步手记 · Lisha Lai", en: "Notes from the City · Lisha Lai" },
  "t.portfolio":   { zh: "作品 · 城市漫步手记", en: "Work · Notes from the City" },
  "t.publications":{ zh: "出版物 · 城市漫步手记", en: "Publications · Notes from the City" },
  "t.photography": { zh: "步旅系列 · 城市漫步手记", en: "Walks · Notes from the City" },
  "t.s1":          { zh: "行走广州 · 城市漫步手记", en: "Walking Guangzhou · Notes from the City" },
  "t.s2":          { zh: "散步香港 · 城市漫步手记", en: "Wandering Hong Kong · Notes from the City" },
  "t.s3":          { zh: "老行当与小店 · 城市漫步手记", en: "Old Trades & Small Shops · Notes from the City" },
  "t.s4":          { zh: "城市背影 · 城市漫步手记", en: "The City's Back · Notes from the City" },
  "t.s5":          { zh: "zine与创作 · 城市漫步手记", en: "Zines & Writing · Notes from the City" },
  "t.about":       { zh: "关于 · 城市漫步手记", en: "About · Notes from the City" },
  "t.contact":     { zh: "联系 · 城市漫步手记", en: "Contact · Notes from the City" },
  "t.fav":         { zh: "收藏夹 · 城市漫步手记", en: "Favorites · Notes from the City" },

  /* ===== 首页 ===== */
  "home.tagline":  { zh: "在城市里慢慢走，<br>记下快要消失的风景和故事。", en: "Walking slowly through cities, recording landscapes and stories before they disappear" },
  "home.view":     { zh: "查看作品", en: "View Work" },

  /* ===== 作品总览 ===== */
  "page.work":     { zh: "作品", en: "Work" },
  "page.worksub":  { zh: "出版物 · 步旅 · zine与创作", en: "Publications · Walks · Zines & Writing" },
  "pf.pub":        { zh: "出版物", en: "Publications" },
  "pf.pubdesc":    { zh: "《文化周末》系列读物 · 六本与城市有关的书", en: "The Cultural Weekend series · six books about the city" },
  "pf.walks":      { zh: "步旅系列", en: "Walks" },
  "pf.walksdesc":  { zh: "正在继续的城市漫步", en: "Ongoing urban wanderings" },
  "pf.zine":       { zh: "zine与创作", en: "Zines & Writing" },
  "pf.zinedesc":   { zh: "独立出版物、手作书与文字", en: "Independent publications, handmade books and writing" },

  /* ===== 出版物 ===== */
  "pub.title":     { zh: "出版物", en: "Publications" },
  "pub.desc":      { zh: "参与编著的城市人文读物与刊物", en: "Urban humanities books and journals I have co-authored and edited" },
  "pub.cw":        { zh: "《文化周末》系列", en: "The \"Cultural Weekend\" Series" },
  "book.feiyi":    { zh: "非遗风雅颂", en: "Odes to Intangible Heritage" },
  "book.taste":    { zh: "雕刻时光的老行当", en: "Old Trades That Carve Time" },
  "book.village":  { zh: "步旅城市", en: "Walking the City" },
  "book.trades":   { zh: "散步古村", en: "Strolling Through Ancient Villages" },
  "book.journey":  { zh: "好味莞城", en: "The Flavours of Guancheng" },
  "book.ways":     { zh: "打开莞城的N种方式", en: "N Ways to Open Guancheng" },
  "pub.urban":     { zh: "城市人文出版物系列", en: "Urban Humanities Publications" },
  "u1":            { zh: "地名里的福田", en: "Futian in Its Place Names" },
  "u2":            { zh: "发现梅林之美", en: "Discovering the Beauty of Meilin" },
  "u3":            { zh: "读懂深圳港：奋楫争先的40年", en: "Reading Shenzhen Port: 40 Years of Forging Ahead" },
  "u4":            { zh: "资兴", en: "Zixing" },
  "u5":            { zh: "大河之北看辛集", en: "Xinji, North of the Great River" },
  "u6":            { zh: "发现潮州之美", en: "Discovering the Beauty of Chaozhou" },

  /* ===== 出版物详情页 · 发现潮州之美 ===== */
  "t.u6book":      { zh: "发现潮州之美 · 城市漫步手记", en: "Discovering the Beauty of Chaozhou · Notes from the City" },
  "cz.intro":      { zh: "潮州素有“海滨邹鲁”的美誉。本书走读湘桥潮州古城、潮安县和饶平县，从古迹、非遗、风味、戏剧、古村等切面，解码潮州的人文底蕴与城市风光。", en: "Chaozhou has long been praised as a cradle of culture by the sea. This book walks through the old town of Xiangqiao, Chao'an and Raoping, decoding the city's humanistic depth and landscapes through its monuments, living heritage, flavours, opera and ancient villages." },
  "cz.p1":         { zh: "目录 · 六个切面看潮州", en: "Contents · six facets of Chaozhou" },
  "cz.p2":         { zh: "清代潮州府城地图", en: "A Qing-dynasty map of Chaozhou" },
  "cz.p3":         { zh: "老街志 · 牌坊街", en: "The old street of memorial arches" },
  "cz.p4":         { zh: "老行当 · 竹编手艺", en: "Old trades · bamboo weaving" },
  "cz.p5":         { zh: "畲族蓝屋村 · 围屋人家", en: "Lanwu, a She-ethnic walled village" },
  "cz.meta":       { zh: "项目主管 / 编者之一：Lisha Lai", en: "Project lead & co-editor: Lisha Lai" },
  "cz.pub":       { zh: "2025 年 2 月 · 内部书物", en: "February 2025 · Internal publication" },

  /* ===== 出版物详情页 · 大河之北看辛集 ===== */
  "t.u5book":      { zh: "大河之北，看辛集 · 城市漫步手记", en: "Xinji, North of the Great River · Notes from the City" },
  "xj.intro":      { zh: "河北辛集市位于京广驿道上，孕育出深厚的冀商传统。本书紧扣辛集的皮革发展史，从古迹、美食、非遗、手艺、老街等维度，挖掘这座城市的历史遗存与人文底蕴。", en: "Xinji in Hebei sits on the ancient Beijing–Guangzhou post road, a place that nurtured a deep tradition of Hebei merchants. Centring on the city's leather-making history, this book uncovers Xinji's historical remains and cultural heritage through its monuments, food, living heritage, crafts and old streets." },
  "xj.p1":         { zh: "历史沿革 · 辛集时间轴", en: "Historical evolution · a timeline of Xinji" },
  "xj.p2":         { zh: "辛集印象 · 城市词云与电视塔夜景", en: "Impressions of Xinji · a word cloud and the TV tower at night" },
  "xj.p3":         { zh: "篇首语 · 第一章「岁·历史余温」", en: "Preface · Chapter One: the lingering warmth of history" },
  "xj.p4":         { zh: "三十米长卷「古镇风情图」", en: "The 30-metre scroll, Old Town Panorama" },
  "xj.p5":         { zh: "走进商场街 · 百货公司与五金商店", en: "Into Shangchang Street · the department store and hardware shop" },
  "xj.p6":         { zh: "商场街 · 路牌与老店铺内景", en: "Shangchang Street · street signs and old shop interiors" },
  "xj.p7":         { zh: "河北一集 · 淘货岁月与钟楼", en: "Hebei's First Market · bargain-hunting days and the clock tower" },
  "xj.p8":         { zh: "辛集皮贴画 · 艺在“边角料”", en: "Xinji leather patchwork · art in the offcuts" },
  "xj.p9":         { zh: "书画装裱修复 · 重塑时光碎片", en: "Mounting and restoring calligraphy · reshaping fragments of time" },
  "xj.p10":        { zh: "捉刀画玉 · 雕琢岁月", en: "Carving jade · sculpting the years" },
  "xj.p11":        { zh: "美食江湖 · 占民饭店的勤脚料", en: "The world of food · the signature qinjiaoliao at Zhanmin Restaurant" },
  "xj.p12":        { zh: "一口酥糖 · 百年手艺", en: "Yikou crisp candy · a century-old craft" },
  "xj.meta":       { zh: "项目主管 / 编者之一：Lisha Lai", en: "Project lead & co-editor: Lisha Lai" },
  "xj.pub":       { zh: "2025 年 5 月第 1 版 · 花山文艺出版社 · <span class='isbn-keep'>ISBN 978-7-5511-7784-9</span>", en: "1st edition, May 2025 · Huashan Literature and Art Publishing House · <span class='isbn-keep'>ISBN 978-7-5511-7784-9</span>" },

  /* ===== 出版物详情页 · 资兴 ===== */
  "t.u4book":      { zh: "资兴 · 城市漫步手记", en: "Zixing · Notes from the City" },
  "zx.intro":      { zh: "在湖南，资兴如同一本被时光摩挲的古籍。本书从古建筑、历史名人、老街、手艺等面向，记录这片土地珍贵的历史遗存。", en: "In Hunan, Zixing is like an ancient book polished by time. Through its old architecture, historical figures, old streets and crafts, this book records the precious historical remains of this land." },
  "zx.p1":         { zh: "目录 · 山水总相宜与古村巡礼记", en: "Contents · chapters of landscapes and ancient villages" },
  "zx.p2":         { zh: "探幽奇岩 · 东江湖兜率岛", en: "Exploring the grotto · Doushuai Island on Dongjiang Lake" },
  "zx.p3":         { zh: "东江大坝 · 东江移民的故事", en: "Dongjiang Dam · stories of the reservoir resettlers" },
  "zx.p4":         { zh: "天鹅山 · 江上绿海，如临仙境", en: "Tian'e Mountain · a green sea above the river" },
  "zx.p5":         { zh: "篇章页 · 古村巡礼记", en: "Chapter opener · Notes on Ancient Villages" },
  "zx.p6":         { zh: "石鼓村 · 程氏大屋", en: "Shigu Village · the Cheng family mansion" },
  "zx.p7":         { zh: "民俗大观园 · 花鼓戏", en: "A garden of folk customs · Huagu opera" },
  "zx.p8":         { zh: "兴宁刺绣 · 飞针走线的乡土诗", en: "Xingning embroidery · a rustic poem in stitches" },
  "zx.p9":         { zh: "风物知味 · 蒸笼里的米香", en: "The taste of local produce · rice fragrance from the steamer" },
  "zx.p10":        { zh: "狗脑贡茶 · 采一缕汤市茶香", en: "Gounao tribute tea · the fragrance of Tangxi" },
  "zx.meta":       { zh: "项目主管 / 编者之一：Lisha Lai", en: "Project lead & co-editor: Lisha Lai" },
  "zx.pub":       { zh: "2025 年 12 月第 1 版 · 贵州民族出版社 · <span class='isbn-keep'>ISBN 978-7-5412-3119-3</span>", en: "1st edition, December 2025 · Guizhou Nationalities Publishing House · <span class='isbn-keep'>ISBN 978-7-5412-3119-3</span>" },

  "t.u1book":      { zh: "地名里的福田 · 城市漫步手记", en: "Futian in Its Place Names · Notes from the City" },
  "ft.intro":      { zh: "福田的地名是一部微缩的岭南文明史，也是一部鲜活的改革开放史。本书旨在挖掘福田区城市街道与围村的地名故事。", en: "The place names of Futian form both a miniature history of Lingnan civilisation and a living history of Reform and Opening-up. This book sets out to unearth the stories behind the street names and walled villages of Futian District." },
  "ft.p1":         { zh: "目录 · 围村地名拾趣", en: "Contents · interesting tales of walled-village names" },
  "ft.p2":         { zh: "目录 · 寻找福田记忆 · 跋", en: "Contents · in search of Futian memories, and the afterword" },
  "ft.p3":         { zh: "福田中心区 · 1998 与 2024 的时空对照", en: "Futian central area · 1998 vs 2024" },
  "ft.p4":         { zh: "福田村 · 福德润泽，田园广阔", en: "Futian Village · auspicious blessings and ample fields" },
  "ft.p5":         { zh: "田面村 · 面田而建的「袖珍村」", en: "Tianmian Village · the little village built by the fields" },
  "ft.p6":         { zh: "下沙村 · 耕山耘海八百年", en: "Xiasha Village · eight hundred years of hill and sea" },
  "ft.p7":         { zh: "篇章页 · 寻找福田记忆", en: "Chapter opener · in search of Futian memories" },
  "ft.p8":         { zh: "深南大道 · 改革开放的缩影", en: "Shennan Boulevard · a microcosm of Reform and Opening-up" },
  "ft.p9":         { zh: "香蜜湖 · 香茅场水库的甜「蜜」蜕变", en: "Xiangmihu · the sweet transformation of a lemongrass reservoir" },
  "ft.meta":       { zh: "项目主管 / 编者之一：Lisha Lai", en: "Project lead & co-editor: Lisha Lai" },
  "ft.pub":       { zh: "2025 年 12 月第 1 版 · 大同出版传媒 · <span class='isbn-keep'>ISBN 978-7-5233-0149-4</span>", en: "1st edition, December 2025 · Datong Publishing &amp; Media · <span class='isbn-keep'>ISBN 978-7-5233-0149-4</span>" },

  /* ===== 出版物详情页 · 发现梅林之美 ===== */
  "t.u2book":      { zh: "发现梅林之美 · 城市漫步手记", en: "Discovering the Beauty of Meilin · Notes from the City" },
  "ml.intro":      { zh: "福田区梅林街道以山水之姿，福泽鹏城。本书从地域情、文艺范、山水韵、科创风、烟火味等不同切面，发现梅林的城市人文之美。", en: "Meilin Subdistrict in Futian graces Shenzhen with its mountains and waters. Through the facets of local heritage, an artistic spirit, natural scenery, technological innovation and everyday vitality, this book discovers the urban and cultural beauty of Meilin." },
  "ml.p1":         { zh: "目录 · 五个切面看梅林", en: "Contents · five facets of Meilin" },
  "ml.p2":         { zh: "手艺守艺 · 巧织凉帽带", en: "Craftsmanship · weaving the hat band" },
  "ml.p3":         { zh: "科创风 · 崛起中的深圳智谷", en: "Innovation · the rising Shenzhen Think Valley" },
  "ml.p4":         { zh: "山水韵 · 伫立梅林水库边", en: "Landscape · standing by Meilin Reservoir" },
  "ml.p5":         { zh: "章节扉页 · 第一章「地域情」", en: "Chapter opener · One: Roots of the Land" },
  "ml.meta":       { zh: "项目主管 / 编者之一：Lisha Lai", en: "Project lead & co-editor: Lisha Lai" },
  "ml.pub":       { zh: "2024 年 6 月第 1 版 · 贵州民族出版社 · <span class='isbn-keep'>ISBN 978-7-5412-2857-5</span>", en: "1st edition, June 2024 · Guizhou Nationalities Publishing House · <span class='isbn-keep'>ISBN 978-7-5412-2857-5</span>" },

  /* ===== 出版物详情页 · 读懂深圳港：奋楫争先的40年 ===== */
  "t.u3book":      { zh: "读懂深圳港 · 城市漫步手记", en: "Reading Shenzhen Port · Notes from the City" },
  "sp.intro":      { zh: "盐田港从创立之初的小港口发展为世界级航运枢纽。本书旨在回溯深圳港集团40年的风雨兼程，从开山填海的艰苦岁月，到如今经略陆海走向全球。", en: "Yantian Port has grown from a small harbour into a world-class shipping hub. This book traces the 40-year journey of Shenzhen Port Group, from the arduous years of reclaiming land from mountains and sea to its present-day reach across land and ocean." },
  "sp.p1":         { zh: "目录 · 第三至六章", en: "Contents · chapters three to six" },
  "sp.p2":         { zh: "奋楫争先的 40 年 · 时间轴", en: "40 years of forging ahead · a timeline" },
  "sp.p3":         { zh: "盐田港全景 · 2008 与 2024", en: "Yantian Port panorama · 2008 and 2024" },
  "sp.p4":         { zh: "篇首语 · 第五章「经略陆海」", en: "Preface · Chapter Five: a marine economy" },
  "sp.p5":         { zh: "海洋产业 · 迈向广袤的蓝海", en: "Marine industry · toward the vast blue ocean" },
  "sp.p6":         { zh: "卷首语 · 深圳港", en: "Foreword · Shenzhen Port" },
  "sp.p7":         { zh: "盐田港报 · 风雨兼程的记录者", en: "Yantian Port News · chronicler of the journey" },
  "sp.meta":       { zh: "项目主管 / 编者之一：Lisha Lai", en: "Project lead & co-editor: Lisha Lai" },
  "sp.pub":       { zh: "2024 年 12 月 · 深圳港集团有限公司出品 · 内部书物", en: "December 2024 · Produced by Shenzhen Port Group Co., Ltd. · Internal publication" },

  /* ===== 出版物详情页 · 非遗风雅颂（《文化周末》系列） ===== */
  "t.feiyibook":   { zh: "非遗风雅颂 · 城市漫步手记", en: "Odes to Intangible Heritage · Notes from the City" },
  "fy.intro":      { zh: "借一场非遗之旅，寻东莞“风雅颂”。挖掘东莞龙舟、乞巧节、尺八、粤剧和醒狮等非遗及传承人的故事，以助力非遗的保护与复兴。", en: "A journey through living heritage in search of Dongguan's own odes. This book uncovers the stories of dragon boating, the Qiqiao Festival, the shakuhachi flute, Cantonese opera, lion dancing and the people who keep these traditions alive, in the hope of aiding their preservation and revival." },
  "fy.p1":         { zh: "目录 · 绿绮琴轩", en: "Contents · the Lüqi Qin Studio" },
  "fy.p2":         { zh: "非遗「风雅颂」 · 东莞龙舟", en: "Odes to heritage · dragon boating in Dongguan" },
  "fy.p3":         { zh: "管中探幽 · 长空先生和唐风尺八", en: "Through the bamboo · Mr Changkong and his shakuhachi" },
  "fy.p4":         { zh: "东莞醒狮 · 在攻与守之间", en: "Dongguan lion dance · between attack and guard" },
  "fy.p5":         { zh: "以镜头存档 · 鳒鱼洲的工业荣光", en: "Archiving the industrial glory of Jianyuzhou through the lens" },
  "fy.meta":       { zh: "项目主管 / 编者之一：Lisha Lai", en: "Project lead & co-editor: Lisha Lai" },
  "fy.pub":       { zh: "2022 年 6 月第 1 版 · 广东音像教材出版社 · <span class='isbn-keep'>ISBN 978-7-900920-92-8</span>", en: "1st edition, June 2022 · Guangdong Audio-Visual Teaching Materials Publishing House · <span class='isbn-keep'>ISBN 978-7-900920-92-8</span>" },

  /* ===== 出版物详情页 · 雕刻时光的老行当（《文化周末》系列） ===== */
  "t.tastebook":   { zh: "雕刻时光的老行当 · 城市漫步手记", en: "Old Trades That Carve Time · Notes from the City" },
  "taste.intro":   { zh: "步入骑楼老街，寻东莞老行当。从花灯、龙凤褂、写对联等手艺，到的钟表行、理发店、照相馆、绞面摊，在老行当中看见手艺人的一生。", en: "Step into the old qilou streets in search of Dongguan's vanishing trades. From lantern-making, dragon-and-phoenix gowns and calligraphy couplets to watch shops, barbershops, photo studios and thread-facial stalls, these old trades reveal the lives of the craftsmen behind them." },
  "taste.p1":      { zh: "目录 · 竹器绘囍", en: "Contents · double-happiness painted on bamboo ware" },
  "taste.p2":      { zh: "老街观想 · 骑楼老店", en: "Reflections on the old street · qilou shopfronts" },
  "taste.p3":      { zh: "花灯掠影 · 漫说流年", en: "Lanterns aglow · musings on the passing years" },
  "taste.p4":      { zh: "以婚俗之名 · 寻手艺微光", en: "In the name of wedding customs · traces of living craft" },
  "taste.p5":      { zh: "打金 · 二十三年，金艺求精", en: "The goldsmith · 23 years of honed craft" },
  "taste.p6":      { zh: "我们怎样讲述东莞学人的故事？", en: "How do we tell the stories of Dongguan's scholars?" },
  "taste.meta":    { zh: "项目主管 / 编者之一：Lisha Lai", en: "Project lead & co-editor: Lisha Lai" },
  "taste.pub":       { zh: "2023 年 10 月第 1 版 · 广东音像教材出版社 · <span class='isbn-keep'>ISBN 978-7-900920-73-7</span>", en: "1st edition, October 2023 · Guangdong Audio-Visual Teaching Materials Publishing House · <span class='isbn-keep'>ISBN 978-7-900920-73-7</span>" },

  /* ===== 出版物详情页 · 步旅城市（《文化周末》系列） ===== */
  "t.villagebook": { zh: "步旅城市 · 城市漫步手记", en: "Walking the City · Notes from the City" },
  "village.intro": { zh: "走进东莞虎门、厚街、莞城、东城，循着历史、人文、生态、美食等主题，探寻东莞的城市魅力与风景人文，看到“折叠城市”的不同面向。", en: "Step into Humen, Houjie, Guancheng and Dongcheng in Dongguan. Following the threads of history, culture, ecology and food, this book explores the city's charm and landscapes, revealing the many faces of a \u201cfolded city\u201d." },
  "village.p1":    { zh: "目录 · 临水亭台", en: "Contents · a pavilion by the water" },
  "village.p2":    { zh: "虎门 · 一座临海古镇，有历史也有闲情", en: "Humen · an old coastal town of history and leisure" },
  "village.p3":    { zh: "漫步莞城 · 寻故居中的时光倒影", en: "Wandering Guancheng · reflections of time in historic residences" },
  "village.p4":    { zh: "城市人的自然生活术", en: "The art of natural living for city dwellers" },
  "village.p5":    { zh: "在莞城 · 牵着时光去散步", en: "In Guancheng · taking a walk with time" },
  "village.meta":  { zh: "项目主管 / 编者之一：Lisha Lai", en: "Project lead & co-editor: Lisha Lai" },
  "village.pub":       { zh: "2023 年 10 月第 1 版 · 广东音像教材出版社 · <span class='isbn-keep'>ISBN 978-7-900920-75-1</span>", en: "1st edition, October 2023 · Guangdong Audio-Visual Teaching Materials Publishing House · <span class='isbn-keep'>ISBN 978-7-900920-75-1</span>" },

  /* ===== 出版物详情页 · 散步古村（《文化周末》系列） ===== */
  "t.tradesbook":  { zh: "散步古村 · 城市漫步手记", en: "Strolling Through Ancient Villages · Notes from the City" },
  "trades.intro":  { zh: "走进茶山南社古村、寮步西溪古村、石排塘尾古村等东莞古村落，记录古村历史与建筑遗存，并与扎根的乡建者和手艺人对话。", en: "Step into Dongguan's ancient villages — Nanshe in Chashan, Xixi in Liaobu, Tangwei in Shipai and beyond — recording their history and architectural heritage, in conversation with the rural builders and craftsmen rooted there." },
  "trades.p1":     { zh: "篇章页 · 古村散步", en: "Section opener · strolling the old villages" },
  "trades.p2":     { zh: "南社古村 · 端坐在时光深处的隐者", en: "Nanshe village · a hermit seated in the depths of time" },
  "trades.p3":     { zh: "在活化中重见西溪", en: "Rediscovering Xixi through revitalisation" },
  "trades.p4":     { zh: "古村地图 · 牛过蓢与迳联", en: "A map of old villages · Niuguolang and Jinglian" },
  "trades.p5":     { zh: "粤韵入画 · 漆彩流光", en: "Cantonese charm in lacquer · a flowing glow" },
  "trades.meta":   { zh: "项目主管 / 编者之一：Lisha Lai", en: "Project lead & co-editor: Lisha Lai" },
  "trades.pub":       { zh: "2022 年 10 月第 1 版 · 广东音像教材出版社 · <span class='isbn-keep'>ISBN 978-7-900920-88-1</span>", en: "1st edition, October 2022 · Guangdong Audio-Visual Teaching Materials Publishing House · <span class='isbn-keep'>ISBN 978-7-900920-88-1</span>" },

  /* ===== 出版物详情页 · 好味莞城（《文化周末》系列） ===== */
  "t.journeybook": { zh: "好味莞城 · 城市漫步手记", en: "The Flavours of Guancheng · Notes from the City" },
  "journey.intro": { zh: "从家宴之味、市井之味、清欢之味、儿时之味、异乡之味等多个切入点，解码本地美食地图，提炼莞城的饮食智慧与生活习俗。", en: "Through the flavours of family banquets, street stalls, quiet everyday treats, childhood memories and faraway places, this issue decodes the local food map and distils the culinary wisdom and customs of Guancheng." },
  "journey.p1":    { zh: "目录 · 檐下雨景", en: "Contents · rain dripping from the eaves" },
  "journey.p2":    { zh: "篇章「好味」莞城 · 老饭店里的市井烟火", en: "Opening chapter · the homely bustle of an old Guancheng restaurant" },
  "journey.p3":    { zh: "儿时之味 · 藏在莞城的旧食光", en: "Tastes of childhood · old flavours hidden in Guancheng" },
  "journey.p4":    { zh: "异乡之味 · 茶餐厅的「港」味人间", en: "Tastes of elsewhere · Hong Kong flavours in a cha chaan teng" },
  "journey.p5":    { zh: "绘静穆之景，抒炽热之心 · 严卫直水彩", en: "Painting tranquil scenes with a fervent heart · Yan Weizhi's watercolours" },
  "journey.meta":  { zh: "项目主管 / 编者之一：Lisha Lai", en: "Project lead & co-editor: Lisha Lai" },
  "journey.pub":       { zh: "2023 年 4 月第 1 版 · 广东音像教材出版社 · <span class='isbn-keep'>ISBN 978-7-900920-93-5</span>", en: "1st edition, April 2023 · Guangdong Audio-Visual Teaching Materials Publishing House · <span class='isbn-keep'>ISBN 978-7-900920-93-5</span>" },

  /* ===== 出版物详情页 · 打开莞城的N种方式（《文化周末》系列） ===== */
  "t.waysbook":    { zh: "打开莞城的N种方式 · 城市漫步手记", en: "N Ways to Open Guancheng · Notes from the City" },
  "ways.intro":    { zh: "一份“行走”的莞城探索计划。从“饮食篇”“趁市集”“品史迹”“寻手艺”“逛文博”“游园篇”等多元视角，寻找不同的莞城记忆。", en: "A walking plan for exploring Guancheng. Through diverse lenses — food, markets, historical sites, crafts, museums and parks — it seeks out different memories of the old town." },
  "ways.p1":       { zh: "目录 · 人民公园的鸽群", en: "Contents · pigeons in the People's Park" },
  "ways.p2":       { zh: "序言 · 一份「行走」的莞城探索计划", en: "Preface · a walking plan for exploring Guancheng" },
  "ways.p3":       { zh: "品史迹 · 在莞城，来一场历史巡礼", en: "Historical sites · a journey through Guancheng's past" },
  "ways.p4":       { zh: "游园篇 · 你好，人民公园", en: "Park stroll · hello, People's Park" },
  "ways.p5":       { zh: "在文创园，探索老厂房里的新东莞", en: "In the creative park · discovering a new Dongguan in old factory buildings" },
  "ways.meta":     { zh: "项目主管 / 编者之一：Lisha Lai", en: "Project lead & co-editor: Lisha Lai" },
  "ways.pub":       { zh: "2023 年 10 月第 1 版 · 广东音像教材出版社 · <span class='isbn-keep'>ISBN 978-7-900920-74-4</span>", en: "1st edition, October 2023 · Guangdong Audio-Visual Teaching Materials Publishing House · <span class='isbn-keep'>ISBN 978-7-900920-74-4</span>" },

  /* ===== 返回链接 ===== */
  "back.portfolio":{ zh: "返回作品", en: "Back to Portfolio" },
  "back.walks":    { zh: "返回摄影系列", en: "Back to Walks" },
  "back.pub":      { zh: "返回出版物", en: "Back to Publications" },

  /* ===== 步旅列表：系列名与描述 ===== */
  "walks.title":   { zh: "步旅系列", en: "Walks" },
  "walks.sub":     { zh: "正在继续的城市漫步", en: "Ongoing urban wanderings" },
  "gz.name":       { zh: "行走广州", en: "Walking Guangzhou" },
  "gz.desc":       { zh: "老街巷、骑楼<br>与早茶城市的日常纹理", en: "Old streets, arcades and the everyday texture of a dim sum city" },
  "hk.name":       { zh: "散步香港", en: "Wandering Hong Kong" },
  "hk.desc":       { zh: "斜坡、霓虹<br>与海风吹过的街角", en: "Slopes, neon and sea-breezed street corners" },
  "sh.name":       { zh: "老行当与小店", en: "Old Trades & Small Shops" },
  "sh.desc":       { zh: "老街里坚守的手艺<br>与新开的小店", en: "Crafts held fast in old streets, and the new shops beside them" },
  "bk.name":       { zh: "城市背影", en: "The City's Back" },
  "bk.desc":       { zh: "路人、光影<br>与无人注意的瞬间", en: "Passers-by, light and shadow, the unnoticed moments" },

  /* ===== series-1 行走广州 ===== */
  "gz.sub":        { zh: "老街巷、骑楼与早茶城市的日常纹理", en: "Old streets, arcades and the everyday texture of a dim sum city" },
  "gz.p1":         { zh: "西关大屋的门窗", en: "Doors and windows of Xiguan mansions" },
  "gz.p2":         { zh: "街坊店与靓汤", en: "Neighbourhood shops and slow-cooked soup" },
  "gz.p3":         { zh: "骑楼下的市井生活", en: "Street life beneath the arcades" },
  "gz.p4":         { zh: "沙面岛的美丽与沧桑", en: "The beauty and changes of Shamian Island" },
  "gz.p5":         { zh: "珠江，沿岸与桥梁", en: "The Pearl River, its banks and bridges" },

  /* ===== series-2 散步香港 ===== */
  "hk.sub":        { zh: "斜坡、霓虹与海风吹过的街角", en: "Slopes, neon and sea-breezed street corners" },
  "hk.p1":         { zh: "折叠中环", en: "Folded Central" },
  "hk.p2":         { zh: "旺角霓虹", en: "Neon in Mong Kok" },
  "hk.p3":         { zh: "坚尼地城的日光与海", en: "Sunlight and sea in Kennedy Town" },
  "hk.p4":         { zh: "上水乡野行", en: "Country walks in Sheung Shui" },

  /* ===== series-3 老行当与小店 ===== */
  "sh.sub":        { zh: "老街里坚守的手艺与新开的小店", en: "Crafts held fast in old streets, and the new shops beside them" },
  "sh.p1":         { zh: "骑楼的打金铺", en: "Goldsmiths beneath the arcade" },
  "sh.p2":         { zh: "古村的蜡染工坊", en: "Batik workshop in an ancient village" },
  "sh.p3":         { zh: "传承百年的龙凤褂制作技艺", en: "The century-old craft of the dragon-and-phoenix wedding dress" },
  "sh.p4":         { zh: "坚守老街的竹器店", en: "The bamboo shop holding on in the old street" },
  "sh.p5":         { zh: "藏在深巷的绞面摊", en: "The threading stall hidden in a deep alley" },
  "sh.p6":         { zh: "年轻人回家开的咖啡店", en: "A coffee shop opened by a young returnee" },

  /* ===== series-4 城市背影 ===== */
  "bk.sub":        { zh: "路人、光影与无人注意的瞬间", en: "Passers-by, light and shadow, the unnoticed moments" },
  "bk.p1":         { zh: "沙面的外国爷爷奶奶", en: "A foreign couple on Shamian" },
  "bk.p2":         { zh: "冬日，同福西", en: "Winter, Tongfuxi" },
  "bk.p3":         { zh: "体育西站｜回家", en: "Tiyu Xilu Station | Going Home" },
  "bk.p4":         { zh: "城影", en: "City Shadow" },
  "bk.p5":         { zh: "人民桥下", en: "Beneath Renmin Bridge" },

  /* ===== series-5 zine与创作 ===== */
  "zine.title":    { zh: "zine与创作", en: "Zines & Writing" },
  "zine.sub":      { zh: "独立出版物、手作书与文字", en: "Independent publications, handmade books and writing" },
  "zine.s1":       { zh: "zine《南华西街》", en: "zine \"Nanhuaxi Street\"" },
  "zine.s2":       { zh: "旅行明信片", en: "Travel postcards" },
  "zine.s3":       { zh: "诗与胡说", en: "Poems & Nonsense" },
  "zine.s4":       { zh: "插画", en: "Hand-drawn illustrations" },

  /* ===== about 关于 ===== */
  "about.title":   { zh: "关于", en: "About" },
  "about.l1":      { zh: "数学系出身，写字，拍照。", en: "Trained in mathematics, I write and take photographs." },
  "about.l2":      { zh: "五年采编，十三本书。", en: "Five years as an editor and journalist; thirteen books." },
  "about.l3":      { zh: "从岭南、粤东，到湘南、华北……", en: "From Lingnan and eastern Guangdong to southern Hunan and the North China Plain…" },
  "about.l4":      { zh: "走过老街、市井、古建、围村，", en: "I have walked old streets, marketplaces, ancient architecture and walled villages," },
  "about.l5":      { zh: "也关注老行当、地名、文化保育与文旅。", en: "and I follow old trades, place names, cultural conservation and cultural tourism." },
  "about.l6":      { zh: "深耕城市漫步、人文摄影、个人写作。", en: "My work is rooted in urban wandering, humanistic photography and personal writing." },
  "about.l7":      { zh: "慢慢走，慢慢记，", en: "Slowly walking, slowly recording —" },
  "about.l8":      { zh: "与你分享目之所及，历史与现在。", en: "sharing all that meets the eye: history and the present." },

  /* ===== contact 合作与联系 ===== */
  "contact.title": { zh: "合作与联系", en: "Collaboration & Contact" },
  "contact.intro": { zh: "欢迎内容合作、约稿、品牌合作，<br>也欢迎一起在城市里散步。", en: "Content commissions, editorial work and brand collaborations are all welcome — as is simply walking the city together." },
  "contact.ways":  { zh: "合作方式", en: "Ways of Working" },
  "contact.wayslead": { zh: "欢迎以这些方式一起工作：", en: "I'd be glad to work together in these ways:" },
  "svc1.n":        { zh: "出版物策划与主编", en: "Publication planning & editorial direction" },
  "svc1.d":        { zh: "城市人文读物、刊物的采编与整体统筹", en: "Editing and overall coordination of urban humanities books and journals" },
  "svc2.n":        { zh: "城市文化内容项目", en: "Urban cultural content projects" },
  "svc2.d":        { zh: "品牌与机构的城市主题内容创作", en: "City-themed content for brands and institutions" },
  "svc3.n":        { zh: "人文摄影与约稿", en: "Humanistic photography & commissions" },
  "svc3.d":        { zh: "城市纪录、影像授权、专题约稿", en: "Documentary work, image licensing, feature commissions" },
  "svc4.n":        { zh: "城市漫步与路线产品", en: "Urban walks & route products" },
  "svc4.d":        { zh: "行走路线策划、城市地图与步旅内容", en: "Walking-route planning, city maps and walking content" },
  "contact.mailcta":  { zh: "来信获取完整作品集", en: "Request the full portfolio by email" },
  "contact.mailnote": { zh: "完整作品集含书籍内页与项目详情，来信后回复发送。", en: "The full portfolio includes book interiors and project details, sent in reply to your email." },
  "contact.contact":  { zh: "联系", en: "Contact" },
  "contact.email":    { zh: "邮箱", en: "Email" },
  "contact.wechat":   { zh: "公众号", en: "WeChat Official Account" },
  "contact.xhs":      { zh: "小红书", en: "Xiaohongshu" },

  /* ===== favorites 收藏夹 ===== */
  "fav.title":     { zh: "收藏夹", en: "Favorites" },
  "fav.sub":       { zh: "灵感碎片：明信片、涂鸦、手写招牌与老照片", en: "Inspiration: postcards, graffiti, hand-painted signs and old photographs" }
};

/* ---------------- 语言读取 / 应用 ---------------- */
function getLang() {
  var lang = "zh";
  try { lang = localStorage.getItem("site-lang") || "zh"; } catch (e) {}
  return lang === "en" ? "en" : "zh";
}

function setLang(lang) {
  try { localStorage.setItem("site-lang", lang); } catch (e) {}
}

function applyLang() {
  var lang = getLang();
  document.documentElement.setAttribute("lang", lang === "en" ? "en" : "zh-CN");

  // 逐元素替换文案
  var nodes = document.querySelectorAll("[data-i18n]");
  Array.prototype.forEach.call(nodes, function (el) {
    var key = el.getAttribute("data-i18n");
    var pair = I18N[key];
    if (!pair) return;
    if (el.tagName.toLowerCase() === "title") {
      document.title = pair[lang];
    } else {
      el.innerHTML = pair[lang];
    }
  });

  // 带预设主题+正文的 mailto 链接随语言切换 href
  var mailLinks = document.querySelectorAll("[data-mailto-zh][data-mailto-en]");
  Array.prototype.forEach.call(mailLinks, function (a) {
    a.setAttribute("href", a.getAttribute("data-mailto-" + lang));
  });

  // 切换按钮：中文态显示 EN（提示可切到英文），英文态显示 中
  var toggles = document.querySelectorAll("[data-lang-toggle]");
  Array.prototype.forEach.call(toggles, function (btn) {
    btn.textContent = lang === "zh" ? "EN" : "中";
    btn.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换为中文");
  });
}

/* ---------------- 绑定切换按钮 ---------------- */
function initLangToggles() {
  var toggles = document.querySelectorAll("[data-lang-toggle]");
  Array.prototype.forEach.call(toggles, function (btn) {
    btn.addEventListener("click", function () {
      setLang(getLang() === "zh" ? "en" : "zh");
      applyLang();
    });
  });
}

/* ---------------- 二维码弹窗（仅联系页使用） ---------------- */
function initModals() {
  function setModal(modal, open) {
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", String(!open));
  }

  var openers = document.querySelectorAll("[data-modal-open]");
  Array.prototype.forEach.call(openers, function (opener) {
    opener.addEventListener("click", function (e) {
      e.preventDefault();
      var id = opener.getAttribute("data-modal-open");
      var modal = document.getElementById(id);
      if (modal) setModal(modal, true);
    });
  });

  var closers = document.querySelectorAll("[data-modal-close]");
  Array.prototype.forEach.call(closers, function (closer) {
    closer.addEventListener("click", function () {
      var modal = closer.closest(".qr-modal");
      if (modal) setModal(modal, false);
    });
  });

  // 点击弹窗外空白处关闭
  var modals = document.querySelectorAll(".qr-modal");
  Array.prototype.forEach.call(modals, function (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) setModal(modal, false);
    });
  });

  // Esc 关闭弹窗（与主菜单 Esc 不冲突）
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      Array.prototype.forEach.call(modals, function (m) { setModal(m, false); });
    }
  });
}

/* ---------------- 启动 ---------------- */
document.addEventListener("DOMContentLoaded", function () {
  applyLang();
  initLangToggles();
  initModals();
});
