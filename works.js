/*
 * ===== 作品清单 =====
 * 想加新作品：复制一段 { ... }，改里面的字，保存，推送到 GitHub 就行。
 * 每一项能写的东西：
 *   id       英文短名，不能重复
 *   type     "mod"（MC 模组）/ "app"（软件）/ "plugin"（插件）/ "other"（其它）
 *   name     中文名            en     英文名（可以不写）
 *   desc     一两句简介（写在 [ ] 里可以写多段）
 *   cover    封面图，放在 img/ 文件夹里；没有就删掉这行，会自动用名字首字当封面
 *   tags     小标签，比如 MC 版本、加载器
 *   status   "released"（已发布）/ "dev"（开发中）
 *   repo     GitHub 仓库名（不开源就删掉这行）
 *   mcmod    MC百科页面的编号（www.mcmod.cn/class/编号.html 里的数字）
 *   series   系列名（可以不写）
 *   links    额外的按钮：[{ text: "按钮文字", url: "链接" }]
 */
const WORKS = [
  // ---------- 焚于烈日之下 ----------
  {
    id: "solapocalypsis", type: "mod", status: "dev", featured: true, series: "焚于烈日之下",
    name: "焚于烈日之下", en: "Solapocalypsis",
    desc: "太阳失稳，即将焚尽世界。作为「磁极灯塔计划」最后的参与者，实验助手，活下去，拯救这个世界吧。",
    cover: "img/solapocalypsis.webp", banner: "img/hero.webp",
    tags: ["26.1.2", "NeoForge", "原创世界类型"],
  },

  // ---------- 金源工艺系列 ----------
  {
    id: "origolds", type: "mod", mcmod: 30435, status: "released", series: "金源工艺系列",
    name: "金源工艺", en: "OriGolds",
    desc: "让金制装备不再垃圾，让镀金大法重出江湖，让附魔苹果成功复活。让金子再次伟大！",
    cover: "img/origolds.webp", repo: "OriGolds",
    tags: ["1.21.1", "26.1.2", "26.3", "NeoForge"],
  },
  {
    id: "origolds-ar", type: "mod", mcmod: 30436, status: "released", series: "金源工艺系列",
    name: "金源工艺：古金极锻", en: "OriGolds: Ancient Reforge",
    desc: "为《金源工艺》添加了后期玩法和一大堆实（超）用（标）的小道具。体验随机数的乐，感受道具赛的爽！",
    cover: "img/origolds-ar.webp", repo: "OriGolds-Ancient-Reforge",
    tags: ["1.21.1", "26.1.2", "26.3", "NeoForge"],
  },
  {
    id: "origolds-ia", type: "mod", mcmod: 32025, status: "released", series: "金源工艺系列",
    name: "金源工艺：工业时代", en: "OriGolds: Industrial Age",
    desc: "以金源工艺之力，自动化整个世界！",
    cover: "img/origolds-ia.webp", repo: "OriGolds-Industrialized-Age",
    tags: ["1.21.1", "26.1.2", "26.3", "NeoForge"],
  },
  {
    id: "origolds-ga", type: "mod", status: "dev", series: "金源工艺系列",
    name: "金源工艺：源金渴望", en: "OriGolds: Gilding Avarice",
    desc: "以《金源工艺》为基础，添加了一整套完整的龙后流程。数值爆炸的凝源镀金、数个 BOSS 和副本等你挑战。开肝吧，我的朋友！",
    cover: "img/origolds-ga.webp",
    tags: ["1.21.1", "NeoForge"],
  },

  // ---------- 原版小优化 ----------
  {
    id: "tridents", type: "mod", mcmod: 32170, status: "released", series: "原版小优化",
    name: "三叉戟强无敌", en: "Awesome Tridents",
    desc: "原版三叉戟：逆天的获取难度，可爱的伤害，还会手抖丢进虚空永远离你而去。“为什么不让它有用点呢？”希望它能满足你对三叉戟的所有幻想！",
    cover: "img/tridents.webp", repo: "Awesome-Tridents",
    tags: ["26.1.2", "26.2", "26.3", "Fabric", "NeoForge"],
  },
  {
    id: "uec", type: "mod", mcmod: 32695, status: "released", series: "原版小优化",
    name: "万能鞘翅胸甲", en: "Universal Elytra Chestplates",
    desc: "一双好的鞘翅需要学会自己粘在胸甲上，不管那是什么胸甲~",
    cover: "img/uec.webp", repo: "Universal-Elytra-Chestplates",
    tags: ["26.1.2", "26.3", "Fabric", "NeoForge"],
  },
  {
    id: "spears", type: "mod", mcmod: 32337, status: "released", series: "原版小优化",
    name: "这长矛有力气", en: "Awesome Spears",
    desc: "突进附魔太能吃、空中不能用、冲锋和突进不能一起用、瞄着天还只能横着冲……装上这个模组，这些烦恼统统烟消云散。希望如此。",
    cover: "img/spears.webp",
    tags: ["1.20.1", "1.21.1", "26.1.2", "26.3", "Fabric", "Forge", "NeoForge"],
  },
  {
    id: "viltraedit", type: "mod", mcmod: 31901, status: "released", series: "原版小优化",
    name: "VTE 村民交易优化", en: "VilTraEdit",
    desc: "刷了一下午经验修补，下一只村民卖得更便宜？手残 A 到村民全村涨价？希望 VTE 可以帮到你！！",
    cover: "img/viltraedit.webp",
    tags: ["26.1.2", "26.3", "Fabric", "NeoForge"],
  },
  {
    id: "whats-next", type: "mod", mcmod: 32570, status: "released", series: "原版小优化",
    name: "极简待办清单", en: "What's Next?",
    desc: "别再出门十分钟之后反复拷问自己出门是干啥来的了。记性不好的话，它应该能拯救你的方块人生（）",
    cover: "img/whats-next.webp",
    tags: ["26.1.2", "26.3", "Fabric", "NeoForge"],
  },
  {
    id: "trees", type: "mod", mcmod: 32072, status: "released", series: "原版小优化",
    name: "树苗，听话！", en: "Let the Trees Grow",
    desc: "帮助受够了树不爱长高的你，重拾种树的好心情。",
    cover: "img/trees.webp",
    tags: ["26.1.2", "26.3", "Fabric"],
  },
  {
    id: "minecarts", type: "mod", mcmod: 32261, status: "released", series: "原版小优化",
    name: "紧急制动！", en: "Controlled Minecarts",
    desc: "哦不！我的矿车，你怎么发车了！我还没有下车！！",
    tags: ["26.1.2", "26.2", "26.3", "Fabric"],
  },
  {
    id: "shear", type: "mod", mcmod: 32438, status: "released", series: "原版小优化",
    name: "自动剃毛", en: "Shear 'em All!",
    desc: "POV：你养了太多的羊，按右键剪毛按得中指疼，然后发现了这个模组。",
    cover: "img/shear.webp",
    tags: ["26.1.2", "26.2", "26.3", "Fabric"],
  },

  // ---------- 软件 ----------
  {
    id: "clock", type: "app", status: "released",
    name: "小克桌面时钟", en: "Claude Desktop Clock",
    desc: "免费、高度可配置、极低性能开销的 Windows 桌面时钟~ 画在桌面图标后面，像壁纸自带的一样。",
    cover: "img/clock.webp", repo: "Claude-Desktop-Clock",
    tags: ["Windows", "Python"],
  },

  // ---------- 插件 ----------
  {
    id: "volume", type: "plugin", status: "released",
    name: "小克音量均衡器", en: "Claude Volume Leveler",
    desc: "EchoMusic 插件：小克会帮你实时调歌曲音量~ 柔和压缩 + 整首预听。",
    cover: "img/volume.webp", repo: "Claude-Volume-Leveler",
    tags: ["EchoMusic", "JavaScript"],
  },
  {
    id: "downloader", type: "plugin", status: "released",
    name: "小克音乐下载器", en: "Claude Music Downloader",
    desc: "EchoMusic 插件：现在可以下载当前在听的歌啦~",
    cover: "img/downloader.webp", repo: "Claude-Music-Downloader",
    tags: ["EchoMusic", "JavaScript"],
  },
];

/* 关于我 / 一起做东西的伙伴（想改就改这里） */
const PROFILE = {
  name: "Arqiu-owo",
  github: "LW-Arqiu1shz",
  bio: "学生，不会写代码，但很会提需求。负责设计、美术、文案和调试，和 AI 伙伴们一起把脑子里的点子做出来。",
  partners: [
    { name: "Arqiu-owo", role: "设计 · 美术 · 文案 · 调试" },
    { name: "Claude", role: "程序 · 项目管理" },
    { name: "DeepSeek", role: "程序 · 项目管理" },
    { name: "ChatGPT", role: "早期程序" },
    { name: "AutoMods", role: "早期模组平台" },
  ],
};
