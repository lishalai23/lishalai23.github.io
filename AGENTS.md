# AGENTS.md

## 项目概览
城市人文摄影师 + 文字创作者的个人作品集站。纯静态 HTML/CSS/JS，无框架、无构建工具、无后端。设计为 Squarespace 摄影师模板式的极简摄影集风格：纸白、墨黑、大量留白，照片通栏铺陈，文字仅作注脚。完整设计规范见 `DESIGN.md`。全站支持中英文双语切换（右上角纯文字按钮，localStorage 记忆，纯静态内置语言包）。

## 目录结构
```
index.html          首页：通栏横幅 + 一句话简介 + 「查看作品 →」唯一入口
portfolio.html      作品总览：出版物 / 步旅系列 / zine与创作 三个同级入口（标题左上角）
publications.html   出版物：两个板块——《文化周末》系列 6 本立体成品图 + 城市人文出版物系列 6 本；封面仅展示，不可点击跳转
photography.html    步旅系列：顶部湾仔总封面（walk-cover.webp）+ 4 个城市漫步系列（广州/香港/小店/背影）通栏封面纵向排列，点击进入详情
series-1.html       系列详情 · 行走广州（guangzhou-01~05.webp：西关大屋的门窗/街坊店与靓汤/骑楼下的市井生活/沙面岛/珠江沿岸与桥梁）
series-2.html       系列详情 · 散步香港（hongkong-01~04.webp：折叠中环/旺角霓虹/坚尼地城的日光与海/上水乡野行）
series-3.html       系列详情 · 老行当与小店（shops-a~f.webp：骑楼的打金铺 / 古村的蜡染工坊 / 传承百年的龙凤褂制作技艺 / 坚守老街的竹器店 / 藏在深巷的绞面摊 / 年轻人回家开的咖啡店）
series-4.html       系列详情 · 城市背影（backs-a~e.webp：沙面的外国爷爷奶奶 / 冬日，同福西 / 体育西站｜回家 / 城影 / 人民桥下）
series-5.html       系列详情 · zine与创作（从作品总览直接进入）；内分四栏目：zine《南华西街》(zine-nanhua-cover.webp 封面实拍 + zine-book.webp 内页叠放拼图 + zine-nanhua-01~03.webp 内页跨页实拍：01 引言石板路 / 02 食过返寻味 / 03 先有南华西，素材为手机实拍 IMG_20261001_185232/185512/185447/185422.jpg，缩长边 2000 webp q85，未裁切；原「手作书内页」栏目已于 20261103 更名为「zine《南华西街」并加入 4 张实拍） / 旅行明信片(zine-postcard.webp) / 诗与胡说(zine-poem.webp) / 插画(zine-illus.webp)
book-*.html         出版物旧详情页（6 本，文件保留备用；6 本已全部被新版详情页覆盖启用：book-feiyi / book-taste / book-village / book-trades / book-journey / book-ways，旧版可从 git 历史取回）
book-feiyi.html     《非遗风雅颂》详情页（《文化周末》系列首个接入的新版详情页：题头用平面封面 images/books/book-feiyi.jpg + 系列名 pub.cw，内页 5 张 feiyi-01~05.webp）
book-taste.html     《雕刻时光的老行当》详情页（文化周末系列第二本：题头平面封面 images/books/book-taste.jpg + 系列名 pub.cw，内页 6 张 taste-01~06.webp）
book-village.html   《步旅城市》详情页（文化周末系列第三本：题头平面封面 images/books/book-village.jpg + 系列名 pub.cw，内页 5 张 village-01~05.webp）
book-trades.html    《散步古村》详情页（文化周末系列第四本：题头平面封面 images/books/book-trades.jpg + 系列名 pub.cw，内页 5 张 trades-01~05.webp）
book-journey.html   《好味莞城》详情页（文化周末系列第五本：题头平面封面 images/books/book-journey.jpg + 系列名 pub.cw，内页 5 张 journey-01~05.webp）
book-ways.html      《打开莞城的N种方式》详情页（文化周末系列第六本（收官）：题头平面封面 images/books/book-ways.jpg + 系列名 pub.cw，内页 5 张 ways-01~05.webp）
urban-01.html       《地名里的福田》详情页（新版样板接入，内页 9 张 futian-01~09.webp；旧版 urban-01 备用页已被覆盖，如需可从 git 历史取回）
urban-02.html       《发现梅林之美》详情页（新版样板接入；旧版 urban-02 备用页已被覆盖，如需可从 git 历史取回）
urban-03.html       《读懂深圳港：奋楫争先的40年》详情页（新版样板接入，内页 7 张 port-01~07.webp）
urban-04.html       《资兴》详情页（新版样板接入，内页 10 张 zixing-01~10.webp；旧版 urban-04 备用页已被覆盖，如需可从 git 历史取回）
urban-05.html       《大河之北看辛集》详情页（新版样板接入，内页 12 张 xinji-01~12.webp；旧版 urban-05 备用页已被覆盖，如需可从 git 历史取回）
urban-06.html       《发现潮州之美》详情页（首个正式启用的新版书详情页样板：题头封面+书名 → 介绍段落 cz.intro → 内页跨页大图 .book-pages 纵向排列完整展示不裁切 → 出版信息；其余书目详情页照此复制改造）
about.html          关于：六行居中诗文（.prose-lines）+ 个人照片 + 「慢慢走，慢慢记。」
contact.html        合作与联系：合作方式四行服务 + 来信获取完整作品集按钮 + 邮箱/公众号/小红书/Instagram；公众号、小红书点击弹出二维码弹窗
favorites.html      收藏夹：16 格方形灵感碎片网格（4/3/2 列响应式）
css/style.css       全站样式（含全屏导航、成品图网格、合作板块、步旅总封面、语言切换按钮、二维码弹窗、响应式断点 1023px / 767px）
js/main.js          三横汉堡 + 全屏菜单开合（点击/Esc 关闭、当前页自动高亮）
js/i18n.js          中英文双语：内置语言包 I18N（243 键）+ data-i18n 替换 + localStorage「site-lang」记忆 + 二维码弹窗开合
images/qrcode-wechat.jpg / qrcode-xiaohongshu.jpg  公众号 / 小红书二维码（contact 弹窗使用）
images/             摄影图（SVG 占位图可替换）+ cover.jpg 首页横幅 + walk-cover.webp 步旅总封面（仅在 portfolio 步旅入口用一次，photography 页顶部已移除，不重复）+ series-*.webp 系列真实封面
images/books/       6 张平面封面（书详情页题头用，.jpg）。文件名与内容已对齐（20261103 修正过一次错位：taste↔journey 互换、village/trades/ways 轮转）：book-feiyi=非遗风雅颂、book-taste=雕刻时光的老行当、book-village=步旅城市、book-trades=散步古村、book-journey=好味莞城、book-ways=打开莞城的N种方式
images/books3d/     6 张立体成品图（publications 文化周末板块，.webp）
images/books-urban/ 城市人文出版物：urban-01~06.webp 平面封面 + urban-puzzle-1~6.webp 实体书拼图（publications 纵向轮排用；puzzle-2 梅林仅单张封面，无右侧内页）。各拼图背景处理说明：puzzle-1/4/5 含真实场景（草地/水面/木桌等）为实景拍摄，背景保留；puzzle-2 梅林封面本身为白底浅灰，已对整张原图做全域低饱和背景提亮（不抠图，避免边缘毛边），使背景干净接近白、与白页自然融合、封面内容完整；puzzle-3 深圳港书本清晰、背景为自然浅灰桌面实景，保持原样即可（无需提亮）；puzzle-5 辛集书本及整体偏暗，已做温和提亮使书本文字与插图更清晰、背景绿植通透自然、无过曝。换图直接替换同名 webp（长边 ≤1500px，webp q80）。
images/books-inner/ 书详情页内页跨页图：chaozhou-01~05.webp（《发现潮州之美》5 张，文件名编号=页面展示顺序：01 目录插画页/02 清代潮州府城古地图/03 老街牌坊街/04 竹编老行当/05 畲族蓝屋村围屋；内页图带极轻纸页阴影 .book-pages img box-shadow）+ meilin-01~05.webp（《发现梅林之美》5 张，编号=展示顺序：01 目录五章/02 手艺守艺·凉帽带编织/03 科创风·深圳智谷航拍/04 山水韵·梅林水库超宽全景（原图 6151px 宽）/05 第一章「地域情」扉页；梅林素材为已裁边的干净跨页图 2097x1474，直接缩长边 2000 转 webp q85，无需再裁打样标记）+ port-01~07.webp（《读懂深圳港：奋楫争先的40年》7 张，编号=展示顺序：01 目录三至六章/02 奋楫争先40年时间轴（原图 4166px 超宽）/03 盐田港全景2008与2024/04 篇首语+第五章「经略陆海」扉页/05 海洋产业·货轮蓝海/06 卷首语·蓝色城市线描/07 盐田港报·题字与百期纪念；深圳港素材同为已裁边干净跨页图 2097x1474，同法处理）+ feiyi-01~05.webp（《非遗风雅颂》5 张，编号=展示顺序：01 目录·绿绮琴轩/02 非遗「风雅颂」·东莞龙舟竞渡/03 管中探幽·长空先生和唐风尺八/04 东莞醒狮·在攻与守之间（中坑明德醒狮）/05 以镜头存档·鳒鱼洲的工业荣光（陈锦波黑白照）；素材为带四角色条打样稿 9024x6452，像素诊断裁切线内框统一 crop(140,153,8880,6294) 后缩长边 2000、webp q85）+ taste-01~06.webp（《雕刻时光的老行当》6 张，编号=展示顺序：01 目录·竹器绘囍插画/02 老街观想·骑楼老店插画/03 花灯掠影·漫说流年（王藻记花灯）/04 以婚俗之名·寻手艺微光（龙凤褂刺绣）/05 打金·二十三年金艺求精（维记工艺店）/06 我们怎样讲述东莞学人的故事（莞城图书馆展览）；素材为 2131x1508 干净跨页 PNG，无打样标记，直接缩长边 2000、webp q85）+ village-01~05.webp（《步旅城市》5 张，编号=展示顺序：01 目录·临水亭台/02 虎门·一座临海古镇（林则徐雕像与沙角炮台）/03 漫步莞城·寻故居中的时光倒影（邓尔雅雕像与象塔街）/04 城市人的自然生活术（山林湖泊全景）/05 在莞城·牵着时光去散步（万寿路街景）；素材同为 2131x1508 干净跨页 PNG，同法处理）+ trades-01~05.webp（《散步古村》5 张，编号=展示顺序：01 篇章页·古村散步风物拼图/02 南社古村·端坐在时光深处的隐者/03 在活化中重见西溪（夜景+巷道）/04 古村地图·牛过蓢与迳联/05 粤韵入画·漆彩流光（漆画展）；素材为 9024x6452 cdr 打样稿，与非遗同框架 crop(140,153,8880,6294) 后缩长边 2000、webp q85）+ journey-01~05.webp（《好味莞城》5 张，编号=展示顺序：01 目录·檐下雨景/02 篇章「好味」莞城·老饭店市井烟火（p10）/03 儿时之味·藏在莞城的旧食光（日兴糖菓+朝阳大包，p40-41）/04 异乡之味·茶餐厅的「港」味人间（维多利茶餐厅，p48-49）/05 绘静穆之景抒炽热之心·严卫直水彩（p66-67）；素材为 9024x6452 cdr 打样稿，与非遗/古村同框架 crop(140,153,8880,6294) 后缩长边 2000、webp q85；其中 03/04 页有红色装饰横线会干扰 ty 像素扫描（误判 168），05 页米黄底带出血外框黑线（rx1983/by1410，内框裁切天然排除），角区刻度线实测均落标准内框）+ ways-01~05.webp（《打开莞城的N种方式》5 张，编号=展示顺序：01 目录·人民公园鸽群（p01，左页目录本无页码）/02 序言·一份「行走」的莞城探索计划（迎恩门城楼街景，p02-03）/03 品史迹·在莞城来一场历史巡礼（迎恩门+象塔街，p22-23）/04 游园篇·你好人民公园（湖景亭台倒影，p58-59）/05 在文创园探索老厂房里的新东莞（鳒鱼洲，p66-67）；素材为 2131x1508 干净跨页 PNG（打开莞城的N种方式_04/05/15/33/37.png），无打样标记，直接缩长边 2000、webp q85）+ xinji-01~12.webp（《大河之北看辛集》12 张，编号=展示顺序：01 历史沿革·辛集时间轴/02 辛集印象（词云+电视塔夜景）/03 篇首语+第一章「岁·历史余温」/04 三十米长卷「古镇风情图」（超宽 2000x587）/05 走进商场街·百货公司五金商店/06 商场街·路牌与老店铺内景/07 河北一集·钟楼/08 辛集皮贴画/09 书画装裱修复/10 捉刀画玉/11 美食江湖·占民饭店勤脚料/12 一口酥糖；素材为 InDesign 打样稿（四角色条+十字规线+页脚"辛集第四版设计.indd"），三种宽度混排：标准 2245x1621 十张 + _03=3237 宽 + _18=5164 超宽长卷，统一按四边出血 74px 裁内框 crop(74,74,W-74,1547) 后缩长边 2000、webp q85。**裁切线诊断教训：行 30-42 是色条带（<128 恒定 0.38-0.69 密度，勿误判为裁切线 ty）、列 56/行 56 是十字规线（恒定背景信号，勿误判为 lx）；出血设计的内容页（夜景/长卷）暗内容会延伸到裁切线外淹没信号，此时以干净页实测为准、按出血规范 W-74 推断宽图右线**；xinji-11 占民饭店页已于 202611039 换用 辛集第四版设计20250317_152.png（indd 286-287 探秘旧城三大怪·勤脚料，内容同类型））+ zixing-01~10.webp（《资兴》10 张，编号=展示顺序：01 目录·山水总相宜与古村巡礼记（indd 4-5）/02 探幽奇岩·东江湖兜率岛（12-13）/03 东江大坝·移民故事（18-19，超宽 6355→2000x447）/04 天鹅山·江上绿海（40-41，超宽 5309→2000x538）/05 篇章页·古村巡礼记（52-53）/06 石鼓村·程氏大屋（54-55）/07 民俗大观园·花鼓戏（186-187）/08 兴宁刺绣（198-199）/09 风物知味·蒸笼米香（244-245）/10 狗脑贡茶·汤市茶园（246-247）；素材为 InDesign 打样稿 资兴0716_*.png（页脚"资兴.indd"），标准宽 2358x1536 八张 + 两张超宽，出血规范与辛集批同框架 crop(74,74,W-74,1462) 后缩长边 2000、webp q85；资产包比消息图多出 4 张（东江大坝/花鼓戏/刺绣/蒸笼），按 indd 页码序插入对应位置全量纳入）+ futian-01~09.webp（《地名里的福田》9 张，编号=展示顺序：01 目录·围村地名拾趣上篇/02 目录·寻找福田记忆下篇与跋/03 福田中心区 1998 与 2024 时空对照（超宽 2000x602）/04 福田村·福德润泽田园广阔/05 田面村·面田而建的袖珍村/06 下沙村·耕山耘海八百年/07 下篇篇章页·寻找福田记忆（印章地名）/08 深南大道·改革开放的缩影/09 香蜜湖·香茅场水库的甜蜜蜕变；素材为成书内页 PNG 2211x1587 标准宽 + 5130 超宽对照全景，四周带 28-30px 纯白出血与白边内十字裁切线（距边约 20px），统一 crop(30,30,W-31,H-31) 去掉白边与裁切线后缩长边 2000、webp q85；页脚页码与侧边艺术字为页面真实内容，保留不裁）。**注意：urban-06.html 中这些图的 src 带 ?v= 版本参数防浏览器缓存——凡是替换同名文件（内容变、文件名不变），必须把所有引用处的 v 值一起递增**，否则访客浏览器会展示缓存旧图，造成图文错位的假象。**此规则同样适用于 js/css 源码变更：20261103 修复 i18n.js 语法错误后忘记 bump v，手机端缓存的坏版本继续生效（EN 按钮按不动），桌面端因重新加载正常——改 js/css 后也必须全站 bump v。**教训（20261024）：从 assets 批量生成编号文件时，Python sorted() 按字符串排序会把 117/146 排到 99 前面（非数字序），导致文件编号与内容映射错位；生成后必须用视觉模型逐张核实内容再写图注，禁止凭文件名推断内容。原始素材为 InDesign 印刷打样稿（带四角色条、十字裁切线、页脚文件名+时间戳），已沿成品裁切线（内框）统一裁边：2245x1621 原图 crop(74,74,2171,1547) 后缩至长边 2000、webp q85。后续书目内页打样稿可按同法处理（先检测色条/十字线位置再裁）。
```

## 运行方式
- 沙箱/部署均由 `.coze` 驱动：`python3 -m http.server ${DEPLOY_RUN_PORT}` 静态服务。
- 本地预览：`python3 -m http.server 5000` 后访问 http://localhost:5000
- 无依赖安装、无构建步骤。

## 替换图片（非技术用户指南）
1. 将真实照片放入 `images/` 目录（建议 .jpg/.webp，长边 ≥ 2000px）。
2. 在对应 HTML 中把 `<img src="images/xxx.svg">` 改成你的文件名，如 `src="images/cover.jpg"`。
3. 占位图与用途对照（SVG 文件名 → 用途）：
   - `cover.svg` 首页横幅（宽幅）
   - `series-guangzhou / -hongkong / -shops / -backs / -zine.svg` 五个系列封面
   - `guangzhou-01~05 / hongkong-01~05 / shops-01~04 / backs-01~06 / zine-01~04.svg` 系列组图（小店系列现为真实图 shops-a~f.webp、背影系列为 backs-a~e.webp）
   - `about.svg` 关于页个人照片
   - `fav-01~16.svg` 收藏夹网格
4. 图片裁切比例由 CSS 控制（object-fit: cover）：首页横幅 16:9 / 移动 4:3，系列封面 16:9 / 移动 4:3，组图 4:3，收藏夹 1:1 方形——照片会自动裁切居中，无需手动裁剪。

## 出版物维护（两个板块）
- **《文化周末》系列**：立体图为外部做好的成品图，在 `images/books3d/`（.webp）。**图片顺序保持原本不变，文字跟随图片实际内容**（书名以图内容为准，勿按文件名推断）。以下为图↔书名↔详情页的固定对应，务必保持一致：
  - `book-feiyi`（图=非遗风雅颂）→ 书「非遗风雅颂」→ book-feiyi.html
  - `book-taste`（图=雕刻时光的老行当）→ 书「雕刻时光的老行当」→ book-taste.html
  - `book-village`（图=步旅城市）→ 书「步旅城市」→ book-village.html
  - `book-trades`（图=散步古村）→ 书「散步古村」→ book-trades.html
  - `book-journey`（图=好味莞城）→ 书「好味莞城」→ book-journey.html
  - `book-ways`（图=打开莞城的N种方式）→ 书「打开莞城的N种方式」→ book-ways.html
  - publications.html 展示顺序为书单顺序（非遗→雕刻→步旅 / 散步古村→好味→打开），**文化周末系列 6 本已全部接入详情页**（book-feiyi/taste/village/trades/journey/ways）：figure 内包裹 `<a class="urban-book-link" href="book-*.html">` 可点击进入。
- **城市人文出版物系列**：6 本封面为真实图 `images/books-urban/urban-01~06.webp`。图↔书名对应（勿改序）：urban-01《地名里的福田》、urban-02《发现梅林之美》、urban-03《读懂深圳港：奋楫争先的40年》、urban-04《资兴》、urban-05《大河之北看辛集》、urban-06《发现潮州之美》（原暂名「解码潮州」，已按作者确认更名）。01/02/03/06 已更新为最新封面并裁掉底部 AIGC 水印；换图直接替换同名 webp（长边 ≤1500px，webp q80）。**urban-01～06 六本已全部接入详情页**（数序：01 地名里的福田 → 06 发现潮州之美）：封面包裹 `<a class="urban-book-link" href="urban-0N.html">` 可点击进入，详情页文件名与封面同编号 urban-0N.html。
- 步旅页行走广州封面(series-guangzhou-cover.webp)=房顶骑楼图；步旅总封面=walk-cover.webp（湾仔）；行走广州点击封面与会页面(series-guangzhou.webp)=人民桥照片+速写；zine 点击封面(series-zine.webp)=手绘 line & writing；作品总览出版物入口图=pub-entry.webp（长椅三本）。
- 换立体图：直接替换 images/books3d/ 同名文件（建议宽度 1100px、白底竖版 2:3，webp）。
- 增删书目：在 publications.html 对应板块内复制或删除一个 `<figure class="pub-item">…</figure>` 块，并同步改 `<figcaption>` 书名。
- 调封面大小：改 css/style.css「出版物页」段的 `.pub-img`（当前为格子宽度 78% 居中 / 手机 82%）。注意：本页曾漏引字体，已在 publications.html `<head>` 单独补上 Google Fonts 的 preconnect + stylesheet 链接，若重建该页请勿删除。
- 点击详情已落地：文化周末系列 6 本封面已全部链接到内页展示页（book-*.html：题头封面+书名 → 介绍段落 → 内页跨页大图纵向排列 → 出版信息）；城市人文出版物系列 6 本已全部接入（urban-01~06，题头封面+书名 → 介绍 → 内页跨页大图 → 出版信息）。
- 注：此前的纯 CSS 3D 构造方案已弃用（成品图更逼真），如需恢复可从 git 历史取回。

## 出版信息区块（12 个详情页统一）
- 位置：内页跨页大图之后、署名行（.book-meta / xx.meta）之前；一行浅灰小字（.book-pubinfo，12.5px / 移动 11.5px，rgba(0,0,0,0.45)，无卡片无边框）。
- 文案用「·」分段：版次 · 出版社 · ISBN；ISBN 包 `<span class="isbn-keep">`（white-space:nowrap）防连字符拆行；i18n 用 innerHTML 替换，键值含 span 安全。**教训（20261103）：i18n.js 键值内嵌 HTML 时属性必须用单引号 `class='isbn-keep'`——双引号会在 JS 双引号字符串里提前闭合造成 SyntaxError，整个 i18n.js 解析失败、语言切换与二维码弹窗全部失效；curl 抓文本发现不了，须用 `node --check js/i18n.js` 验证。**
- 双语：每页一个 xx.pub 键（与 xx.meta 同组相邻）；英文为 `1st edition, 月份 年份 · 出版社英文名 · ISBN ...`；出版社英文名：广东音像教材出版社=Guangdong Audio-Visual Teaching Materials Publishing House、贵州民族出版社=Guizhou Nationalities Publishing House、花山文艺出版社=Huashan Literature and Art Publishing House、大同出版传媒=Datong Publishing & Media、深圳港集团有限公司=Shenzhen Port Group Co., Ltd.
- 数据表（书名 → 键前缀 → 版次 · 出版社 · ISBN；按书名对应文件，勿按用户消息里的文件名推断）：
  - 非遗风雅颂 fy：2022-06 第 1 版 · 广东音像教材 · 978-7-900920-92-8
  - 雕刻时光的老行当 taste：2023-10 第 1 版 · 广东音像教材 · 978-7-900920-73-7
  - 步旅城市 village：2023-10 第 1 版 · 广东音像教材 · 978-7-900920-75-1
  - 散步古村 trades：2022-10 第 1 版 · 广东音像教材 · 978-7-900920-88-1
  - 好味莞城 journey：2023-04 第 1 版 · 广东音像教材 · 978-7-900920-93-5
  - 打开莞城的N种方式 ways：2023-10 第 1 版 · 广东音像教材 · 978-7-900920-74-4
  - 地名里的福田 ft：2025-12 第 1 版 · 大同出版传媒 · 978-7-5233-0149-4
  - 发现梅林之美 ml：2024-06 第 1 版 · 贵州民族 · 978-7-5412-2857-5
  - 读懂深圳港 sp：2024-12 · 深圳港集团有限公司出品 · 内部书物（无 ISBN）
  - 资兴 zx：2025-12 第 1 版 · 贵州民族 · 978-7-5412-3119-3
  - 大河之北看辛集 xj：2025-05 第 1 版 · 花山文艺 · 978-7-5511-7784-9
  - 发现潮州之美 cz：2025-02 · 内部书物（无 ISBN）

## 导航维护（全站统一的三横 + 全屏菜单）
- 结构：每个页面 header 内为 `.nav-toggle`（三横按钮，展开变 X）+ `<nav class="nav-menu">`（5 个衬线菜单链接：首页/作品总览/关于/联系/收藏夹，底部 `.nav-menu-foot` 放 Instagram）+ 右侧 `.site-name`（点击回首页）。
- 行为全部在 js/main.js：开合 `.is-open` 类、点击菜单链接或按 Esc 关闭、按当前文件名自动给对应链接加 `.is-active`（短细线）。
- 改菜单项 / 顺序：需在 12 个 HTML 的 `.nav-menu` 内统一增删 `<a>`（nth-child 错峰延迟只预设了 5 项，超出后在 CSS 补延迟规则）。
- 菜单样式：css/style.css「顶部导航」段；桌面菜单 30px / 手机 24px 衬线，全屏白底。
- 右上角站名 `.site-name`：姓名行 `.site-name-name` + 标签行（Urban Observer · 城市漫游手记）。

## 替换文字与链接
- 邮箱：当前为 lishalai2609@outlook.com（全站多处）。通用联系入口（联系页 `.contact-value` + 全站页脚 `.footer-email`）已改为「预设主题+正文的 mailto」并用 `data-mailto-zh` / `data-mailto-en` 双属性随语言切换 href（逻辑见 js/i18n.js applyLang）；「来信获取完整作品集」按钮（.mail-cta）保持不变（主题仍为索取完整作品集）。换邮箱时需同步替换 mailto:、data-mailto-zh、data-mailto-en 三处的 lishalai2609@outlook.com。
- 社交链接：页脚 IG、菜单底部 IG、contact.html 的 IG 均已指向 https://www.instagram.com/shoelace.23。
- 公众号与小红书（「鞋带二三」）已取消 mailto，改为点击弹出二维码弹窗；二维码图片为 images/qrcode-wechat.jpg、images/qrcode-xiaohongshu.jpg（账号名「鞋带二三」不翻译）。
- contact.html 含「合作方式」板块（.collab / .service-list 四行服务）与「来信获取完整作品集」按钮（.mail-cta），对应样式在 css/style.css 末尾。
- 系列增删：在 `photography.html` 复制一个 `.series-item` 块，并在 `series-N.html` 复制一个详情页；组图增删复制 `.photo-item` 块。

## 双语维护（中英文切换）
- 实现：所有需翻译元素带 `data-i18n="键名"`；文案集中在 `js/i18n.js` 顶部的 `I18N` 对象（键: { zh, en }）。`<title>` 也用 data-i18n，脚本会写入 document.title；注意 title 的 HTML 内fallback 必须直接写正式中文标题（如「城市漫步手记 · Lisha Lai」「非遗风雅颂 · 城市漫步手记」），禁止用 placeholder——浏览器标签页与微信分享卡片读取的是原始 HTML title，JS 未执行时 fallback 即最终展示（20261103 曾因全站 placeholder 导致标签页/分享卡片显示异常）。
- 切换：`.lang-toggle` 按钮（中文态显示 EN、英文态显示 中）；选择存于 localStorage「site-lang」，默认中文，跨页与再次访问保持。纯静态、无在线翻译，断网可用。
- 改文案 / 增条目：在 I18N 改对应键的 zh/en，并在 HTML 加 data-i18n；改完务必让“语言包键”与“HTML 引用”一致（可跑键引用校验）。
- 图片内文字（书封、照片、明信片、手作书）不翻译；12 本书名英文以语言包 book.*/u* 为准。
- 含 `<br>` 的条目：中文保留换行，英文为整句（自动换行），已分别用不同键（如 gz.desc 与 gz.sub）。

## 二维码弹窗维护
- 结构在 contact.html：触发为 `data-modal-open="modal-wechat|modal-xhs"`，弹窗 `#modal-wechat` / `#modal-xhs`（`.qr-modal > .qr-modal-box`）；开合逻辑在 js/i18n.js `initModals`（点空白/×/Esc 关闭）。
- 换二维码：直接替换 images/qrcode-wechat.jpg 或 images/qrcode-xiaohongshu.jpg（建议方形、清晰，手机端长按可识别）。
- 手机端二维码约占屏宽 64vw（60%~70%），弹窗不超出屏幕。

## 代码风格
- 无圆角、无彩色、无渐变、无阴影卡片；仅允许极轻微悬停反馈（opacity / scale 1.015–1.03，0.3–0.6s ease）。
- 字体：标题 Noto Serif SC（衬线），正文 Noto Sans SC / PingFang SC（无衬线）；字体走 Google Fonts 官方 .cn 域名。
- 色彩集中在 `css/style.css` 顶部 `:root` CSS 变量，改色只改变量。
- 中文标点仅用于正文文案；代码内标点全部半角。
- 关键位置均有中文注释，面向非技术用户维护。
