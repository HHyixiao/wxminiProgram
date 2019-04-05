# wxminiProgram
微信小程序学习


1. 安装npm依赖

    ``` npm insatall ```

2. 使用微信开发者工具npm构建

####
1. 小程序有5个生命周期
  onLoad
  onShow
  onReady
  onHide
  onUnload
2. 小程序路由共有6种方式
  初始化            新页面入栈
  打开新页面        新页面入栈
  页面重定向        当前页面出栈，新页面入栈
  页面返回          页面不断出栈，直到目标返回页，新页面入栈
  Tab切换           全部页面出栈，只留下新的tab页面
  重加载            全部页面出栈，只留下新的t页面
