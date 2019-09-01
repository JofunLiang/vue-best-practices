module.exports = {
  home: true,
  title: 'Vue最佳实践',
  port: 3333,
  dest: './dist',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'Github',
        link: 'https://github.com/JofunLiang/vue-best-practices'
      }
    ],
    sidebar: [
      {
        title: '目录',
        collapsable: false,
        children: [
          '/',
          '开启路由懒加载',
          '始终为组件样式设置作用域',
          '规范组件选项的顺序',
          '可配置的watch侦听器',
          '化繁为简的计算属性',
          '始终为列表渲染提供唯一的key值',
          '模块化组织Vuex状态',
          '模块化路由配置'
        ]
      }
    ]
  }
}