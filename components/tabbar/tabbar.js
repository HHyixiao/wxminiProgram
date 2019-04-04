// components/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [
      '../index/index',
      '../search/search',
      '../logs/logs',
      '../logs/logs',
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      wx.navigateTo({
        url: this.data.list[event.detail]
      })
    }
  }
})