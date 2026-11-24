/*
 * ===== 作品清单 =====
 * 想加新作品：复制一段 { ... }，改里面的字，保存，推送到 GitHub 就行。
 * 每一项能写的东西：
 *   id       英文短名，不能重复
 *   type     "mod"（MC 模组）/ "app"（软件）/ "plugin"（插件）/ "other"（其它）
 *   name     中文名            en     英文名（可以不写）
 *   desc     一两句简介（写在 [ ] 里可以写多段）
 *   cover    封面图，放在 img/ 文件夹里，要正方形；没有就删掉这行，会自动用名字首字当封面
 *   versions 模组支持的加载器和 MC 版本（以 MC百科 下载页为准），比如
 *            { Fabric: ["26.1.2", "26.3"], NeoForge: ["1.21.1", "26.3"] }
 *            网页会自动按大版本（1.21.x / 26.1.x …）分组，点「版本」弹出小气泡
 *   platform 软件 / 插件的运行平台，比如 ["Windows"]、["EchoMusic"]
 *   （不要再加别的标签；最新版本和更新日期会自动从 updates.js 里取）
 *   status   "released"（已发布）/ "dev"（开发中）
 *   repo     GitHub 仓库名（不开源就删掉这行）
 *   mcmod    MC百科页面的编号（www.mcmod.cn/class/编号.html 里的数字）
 *   series   小分类名（比如 "金源工艺系列"）。作品按它分组，顶上小分类栏也按它列；不写就归到「未分类」
 *            软件写做给谁/哪一类（如 "桌面小帮手"），插件写给哪个软件做的（如 "EchoMusic"）
 *   links    额外的按钮：[{ text: "按钮文字", url: "链接" }]
 */
const WORKS = [
  // ---------- 焚于烈日之下 ----------
  {
    id: "solapocalypsis", type: "mod", status: "dev", featured: true,
    name: "焚于烈日之下", en: "Solapocalypsis",
    desc: "太阳失稳，即将焚尽世界。作为「磁极灯塔计划」最后的参与者，实验助手，活下去，拯救这个世界吧。",
    cover: "img/solapocalypsis.webp", banner: "img/hero.webp",
    versions: { NeoForge: ["26.1.2"] },
  },

  // ---------- 前置库 ----------
  {
    id: "enplotify", type: "mod", status: "released",
    name: "沉浸式剧情", en: "EnPlotify",
    desc: "黑屏逐字的剧情模式，加上能自己写字、配图的海报、报纸、文档、黑板和白板，还有打印机和能上网的终端。其它模组只需写好文本，就能用上这些。",
    cover: "img/enplotify.webp", repo: "EnPlotify",
    versions: { NeoForge: ["26.1.2"] },
  },

  // ---------- 金源工艺系列 ----------
  {
    id: "origolds", type: "mod", mcmod: 30435, status: "released", series: "金源工艺系列",
    name: "金源工艺", en: "OriGolds",
    desc: "让金制装备不再垃圾，让镀金大法重出江湖，让附魔苹果成功复活。让金子再次伟大！",
    cover: "img/origolds.webp", repo: "OriGolds",
    versions: { NeoForge: ["1.21.1", "26.1.2", "26.3"] },
  },
  {
    id: "origolds-ar", type: "mod", mcmod: 30436, status: "released", series: "金源工艺系列",
    name: "金源工艺：古金极锻", en: "OriGolds: Ancient Reforge",
    desc: "为《金源工艺》添加了后期玩法和一大堆实（超）用（标）的小道具。体验随机数的乐，感受道具赛的爽！",
    cover: "img/origolds-ar.webp", repo: "OriGolds-Ancient-Reforge",
    versions: { NeoForge: ["1.21.1", "26.1.2", "26.3"] },
  },
  {
    id: "origolds-ia", type: "mod", mcmod: 32025, status: "released", series: "金源工艺系列",
    name: "金源工艺：工业时代", en: "OriGolds: Industrial Age",
    desc: "以金源工艺之力，自动化整个世界！",
    cover: "img/origolds-ia.webp", repo: "OriGolds-Industrialized-Age",
    versions: { NeoForge: ["1.21.1", "26.1.2", "26.3"] },
  },
  {
    id: "origolds-ga", type: "mod", status: "dev", series: "金源工艺系列",
    name: "金源工艺：源金渴望", en: "OriGolds: Gilding Avarice",
    desc: "以《金源工艺》为基础，添加了一整套完整的龙后流程。数值爆炸的凝源镀金、数个 BOSS 和副本等你挑战。开肝吧，我的朋友！",
    cover: "img/origolds-ga.webp", banner: "img/origolds-ga-banner.webp",
    versions: { NeoForge: ["1.21.1"] },
  },

  // ---------- 原版小优化 ----------
  {
    id: "lets-start-together", type: "mod", status: "released", series: "原版小优化",
    name: "联机小厅", en: "Let's Start Together!",
    desc: "“我还没进来呢你们怎么开玩了”联机时总有人网不好进不来？先在小厅里集合，等大家都进来再一起开始，就没有进度差的烦恼啦~",
    cover: "img/lets-start-together.webp", repo: "Lets-Start-Together",
    versions: { Fabric: ["26.1.2", "26.3"], NeoForge: ["26.1.2", "26.3"] },
  },
  {
    id: "tridents", type: "mod", mcmod: 32170, status: "released", series: "原版小优化",
    name: "三叉戟强无敌", en: "Awesome Tridents",
    desc: "原版三叉戟：逆天的获取难度，可爱的伤害，还会手抖丢进虚空永远离你而去。“为什么不让它有用点呢？”希望它能满足你对三叉戟的所有幻想！",
    cover: "img/tridents.webp", repo: "Awesome-Tridents",
    versions: { Fabric: ["26.1.2", "26.2", "26.3"], NeoForge: ["26.1.2", "26.2", "26.3"] },
  },
  {
    id: "uec", type: "mod", mcmod: 32695, status: "released", series: "原版小优化",
    name: "万能鞘翅胸甲", en: "Universal Elytra Chestplates",
    desc: "一双好的鞘翅需要学会自己粘在胸甲上，不管那是什么胸甲~",
    cover: "img/uec.webp", repo: "Universal-Elytra-Chestplates",
    versions: { Fabric: ["26.1.2", "26.3"], NeoForge: ["26.1.2", "26.3"] },
  },
  {
    id: "spears", type: "mod", mcmod: 32337, status: "released", series: "原版小优化",
    name: "这长矛有力气", en: "Awesome Spears",
    desc: "突进附魔太能吃、空中不能用、冲锋和突进不能一起用、瞄着天还只能横着冲……装上这个模组，这些烦恼统统烟消云散。希望如此。",
    cover: "img/spears.webp", repo: "Awesome-Spears",
    versions: { Fabric: ["26.1.2", "26.3"], NeoForge: ["1.21.1", "26.1.2", "26.3"], Forge: ["1.20.1"] },
  },
  {
    id: "viltraedit", type: "mod", mcmod: 31901, status: "released", series: "原版小优化",
    name: "VTE 村民交易优化", en: "VilTraEdit",
    desc: "刷了一下午经验修补，下一只村民卖得更便宜？手残 A 到村民全村涨价？希望 VTE 可以帮到你！！",
    cover: "img/viltraedit.webp",
    versions: { Fabric: ["26.1.2", "26.3"], NeoForge: ["26.1.2", "26.3"] },
  },
  {
    id: "whats-next", type: "mod", mcmod: 32570, status: "released", series: "原版小优化",
    name: "极简待办清单", en: "What's Next?",
    desc: "别再出门十分钟之后反复拷问自己出门是干啥来的了。记性不好的话，它应该能拯救你的方块人生（）",
    cover: "img/whats-next.webp",
    versions: { Fabric: ["26.1.2", "26.3"], NeoForge: ["26.1.2", "26.3"] },
  },
  {
    id: "trees", type: "mod", mcmod: 32072, status: "released", series: "原版小优化",
    name: "树苗，听话！", en: "Let the Trees Grow",
    desc: "帮助受够了树不爱长高的你，重拾种树的好心情。",
    cover: "img/trees.webp",
    versions: { Fabric: ["26.1.2", "26.3"] },
  },
  {
    id: "minecarts", type: "mod", mcmod: 32261, status: "released", series: "原版小优化",
    name: "紧急制动！", en: "Controlled Minecarts",
    desc: "哦不！我的矿车，你怎么发车了！我还没有下车！！",
    cover: "img/minecarts.webp",
    versions: { Fabric: ["26.1.2", "26.2", "26.3"] },
  },
  {
    id: "shear", type: "mod", mcmod: 32438, status: "released", series: "原版小优化",
    name: "自动剃毛", en: "Shear 'em All!",
    desc: "POV：你养了太多的羊，按右键剪毛按得中指疼，然后发现了这个模组。",
    cover: "img/shear.webp",
    versions: { Fabric: ["26.3"] },
  },

  // ---------- 软件 ----------
  {
    id: "clock", type: "app", status: "released", series: "桌面小帮手",
    name: "小克桌面时钟", en: "Claude Desktop Clock",
    desc: "免费、高度可配置、极低性能开销的 Windows 桌面时钟~ 画在桌面图标后面，像壁纸自带的一样。",
    cover: "img/clock.webp", repo: "Claude-Desktop-Clock",
    platform: ["Windows"],
  },

  // ---------- 插件 ----------
  {
    id: "volume", type: "plugin", status: "released", series: "EchoMusic",
    name: "小克音量均衡器", en: "Claude Volume Leveler",
    desc: "EchoMusic 插件：小克会帮你实时调歌曲音量~ 柔和压缩 + 整首预听。",
    cover: "img/volume.webp", repo: "Claude-Volume-Leveler",
    platform: ["EchoMusic"],
  },
  {
    id: "downloader", type: "plugin", status: "released", series: "EchoMusic",
    name: "小克音乐下载器", en: "Claude Music Downloader",
    desc: "EchoMusic 插件：现在可以下载当前在听的歌啦~",
    cover: "img/downloader.webp", repo: "Claude-Music-Downloader",
    platform: ["EchoMusic"],
  },
];

/* 关于我 / 鸣谢（想改就改这里） */
const PROFILE = {
  name: "Arqiu-owo",
  github: "LW-Arqiu1shz",
  bio: "欢迎来到阿秋的小仓库~这里不限量供应各种好玩的或者不好玩的废品，欢迎捡起来看看。网络好的话，带走也可以喔✌️😋",
  // 鸣谢：AI 放第一排，人放第二排
  thanksAI: [
    { name: "Claude", role: "程序 · 项目管理" },
    { name: "DeepSeek", role: "程序 · 项目管理" },
    { name: "ChatGPT", role: "程序 · 美术" },
    { name: "AutoMods", role: "程序 · 美术" },
    { name: "Gemini", role: "美术 · 音乐" },
    { name: "豆包", role: "美术" },
  ],
  thanksPeople: [
    { name: "鱼某人bz", role: "开发启蒙" },
    { name: "有问题的红河", role: "开发启蒙" },
  ],
};
