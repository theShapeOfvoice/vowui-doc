const highlight = require('./public/js/highlight')

module.exports = {
  title: 'VOW UI',
  evergreen: false,
  host: 'localhost',
  port: 3000,
  base: '/',
  dest: './dist',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.png',
      },
    ],
  ],

  plugins: [
    'vuepress-plugin-medium-zoom',
    [
      'vuepress-plugin-code-copy',
      {
        align: 'bottom',
        color: '#3963bc',
        successText: '复制成功~',
      },
    ],
  ],
  chainMarkdown(config) {
    config.options.highlight(highlight).end()
  },
  themeConfig: {
    docsDir: 'docs',
    editLinks: false,
    smoothScroll: true,
    repo: 'vow-cli/vow-ui',
    logo: '/left-logo.png',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '组件库',
        link: '/component/',
      },
      {
        text: '前端',
        link: '/frontend/Vue/vue项目性能优化',
      },
      {
        text: '后端',
        link: '/backend/Java/springboot',
      },
      {
        text: '客户端',
        link: '/client/Flutter/flutter',
      }
    ],
    sidebar: {
      '/frontend/':[
        {
          title: 'Vue',
          children: ['Vue/vue项目性能优化'],
        },
      ],
      '/backend/':[
        {
          title: 'Java',
          children: ['Java/springboot'],
        },
      ],
      '/client/':[
        {
          title: '客户端',
          children: ['Flutter/flutter'],
        },
      ],
      '/component/': [
        {
          title: '布局组件',
          children: ['layout/sticky','layout/sticky-item'],
        },
        {
          title: '操作反馈',
          children: ['feedback/toast'],
        },
        {
          title: '基础组件',
          children: ['basic/icon','basic/ifiniteLoading'],
        },
        {
          title: '导航组件',
          children: [],
        },
        {
          title: '业务组件',
          children: [],
        },
      ]
    },
  },
}
