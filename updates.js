/*
 * ===== 更新公告 =====
 * 新的写在最上面。每一条：
 *   date     日期，比如 "2026-11-19"（只知道月份就写 "2026-10"）
 *   work     作品的 id（和 works.js 里的一样），会自动显示作品名、归到对应分区
 *   type     不对应某个作品时才写："mod" / "app" / "plugin" / "other"
 *   title    不对应某个作品时的标题
 *   version  版本号（可以不写）
 *   items    更新内容，一条一行
 */
const UPDATES = [
  { date: "2026-11-19", work: "uec", version: "1.0.1", items: [
    "修复在非 NeoForge 服务器上无法正常进入服务器的问题（仅 NeoForge 版本）",
    "添加双语适配",
    "在 GitHub 开源",
  ]},
  { date: "2026-11-17", work: "clock", version: "1.0.0", items: [
    "第一个正式版~ 下载解压后双击「小克桌面时钟.exe」即可",
  ]},
  { date: "2026-11-17", work: "volume", version: "1.2.0", items: [
    "柔和压缩：超出范围的部分只拉回一部分，大声段落不再被一刀切",
    "整首预听：提前 1～2 秒调音量；网慢 / 卡顿时只用实时模式",
    "兼容所有换歌模式，新歌开头立刻接上",
    "设置面板：滑块可见、数值可直接输入",
  ]},
  { date: "2026-11-17", work: "downloader", version: "1.2.3", items: [
    "现在可以下载当前在听的歌啦~",
  ]},
  { date: "2026-11-17", work: "tridents", version: "1.2.0", items: [
    "新增 26.2 NeoForge 版本",
  ]},
  { date: "2026-11-16", work: "spears", version: "1.1.0", items: [
    "新增 1.20.1 Forge、1.21.1 NeoForge 版本",
  ]},
  { date: "2026-11-11", work: "origolds", version: "1.1.3", items: [
    "优化模组性能表现和双语适配",
    "修复一些在异常条件下会导致游戏崩溃或不稳定的 bug",
    "添加配置界面",
  ]},
  { date: "2026-11-11", work: "origolds-ar", version: "1.2.2", items: [
    "优化模组性能表现和双语适配",
    "修复大量在特定异常条件下会导致游戏崩溃、卡死、数据丢失的问题",
    "修复与月亮行者勋章、永恒药水、钩爪弩炮相关的 bug",
  ]},
  { date: "2026-11-11", work: "origolds-ia", version: "1.0.2", items: [
    "优化模组性能表现和双语适配",
    "修复一些显示问题与金源圆锯刃槽伤害问题（26.1.2 / 26.3）",
    "修复金源自动合成机中物品合成配方的问题",
  ]},
  { date: "2026-11-11", work: "origolds-ia", version: "1.0.1", items: [
    "修复挂机志愿者的数据存储问题，现在数据相同的挂机志愿者可以正常堆叠",
  ]},
  { date: "2026-11-11", work: "origolds-ia", version: "1.0.0", items: [
    "加入所有机器",
    "加入两种无线系统",
  ]},
  { date: "2026-11-08", work: "tridents", version: "1.2.0", items: [
    "加入配置选项，现在可以自由开关模组的每个功能",
    "模组菜单里的名称和描述会随语言切换",
  ]},
  { date: "2026-11-05", work: "origolds", version: "1.1.2", items: [
    "重绘聚融金源铸模的贴图",
    "略微调整复合金源铸模、聚融金源镀板的贴图",
  ]},
  { date: "2026-11-05", work: "origolds-ar", version: "1.2.1", items: [
    "略微修改月亮行者勋章的贴图，补上获取它的成就",
    "修复语言文件中成就描述英文翻译错误的问题",
    "修复测伤志愿者的物品提示不显示的问题（仅 26.1.2 / 26.3）",
  ]},
  { date: "2026-11-01", work: "uec", version: "1.0.0", items: ["加入基础功能"] },
  { date: "2026-11-01", work: "whats-next", version: "1.0.0", items: ["加入基础功能"] },
  { date: "2026-11-01", work: "viltraedit", version: "1.1.0", items: [
    "加入村民自回血等额外功能",
    "修复 1.0.0 版本一些功能未能正常生效的问题",
  ]},
  { date: "2026-10-29", work: "tridents", version: "1.1.2", items: [
    "修复仅服务端安装时，客户端玩家手持三叉戟蓄力仍会对自身造成减速的 bug",
  ]},
  { date: "2026-10-27", work: "spears", version: "1.1.0", items: [
    "长矛冲锋状态击中目标不会再导致停止奔跑",
  ]},
  { date: "2026-10-25", work: "tridents", version: "1.1.1", items: [
    "优化激流手感",
    "修复激流冲刺后会重置玩家速度的 bug",
  ]},
  { date: "2026-10-25", work: "spears", version: "1.0.0", items: ["加入基础功能"] },
  { date: "2026-10-25", work: "viltraedit", version: "1.0.0", items: ["加入村民交易平衡和仇恨不为负功能"] },
  { date: "2026-10-24", work: "tridents", version: "1.1.0", items: ["加入激流相关改动"] },
  { date: "2026-10-21", work: "tridents", version: "1.0.0", items: ["加入基础功能"] },
  { date: "2026-10-18", work: "trees", version: "1.0.0", items: ["加入基础功能"] },
  { date: "2026-10-17", work: "minecarts", version: "1.0.0", items: ["加入基础功能"] },
  { date: "2026-10-17", work: "shear", version: "1.0.0", items: ["加入基础功能"] },
  { date: "2026-10-16", work: "origolds", version: "1.1.1", items: [
    "适配附属模组《源金渴望》《古金极锻》的 action bar 接口",
  ]},
  { date: "2026-10-16", work: "origolds-ar", version: "1.2.0", items: [
    "加入无线红石道具与系统",
    "添加与附属模组《工业时代》的接口适配",
  ]},
  { date: "2026-10", work: "origolds-ar", version: "1.1.0", items: ["加入大量装备"] },
  { date: "2026-10-09", work: "origolds", version: "1.1.0", items: [
    "附魔、药水效果改为基础加成",
    "更改远程武器暴击机制",
  ]},
  { date: "2026-09-02", work: "origolds", version: "1.0.0", items: [
    "加入原版金装备重做",
    "加入镀金系统",
  ]},
  { date: "2026-09-01", work: "origolds-ar", version: "1.0.0", items: ["加入赋源系统"] },
];
