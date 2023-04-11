import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  title: "工一数字",
  description: "description",
  themeConfig: {
    logo: '/logo.svg',
    // siteTitle: false,

    outlineTitle: '本页目录',
    // outline:2,
    
    algolia: {
        appId: 'N26XKP71HQ', // 需要替换
        apiKey: 'b68973e86f1cea6fe107eecb587b3d40', // 需要替换
        indexName: 'co-docs-index', // 需要替换
        placeholder: '请输入关键词',
        // buttonText: '搜索'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },

      {text: '版本',
      items: [
        { text: 'v1.0', link: '/start' },
        { text: 'v1.2', link: '/start' },
        { text: 'v1.9', link: '/start' },
        { text: 'v2.0', link: '/start' },
        // { text: '愿景', link: '/vision' }
      ]}    

    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '快速开始', link: '/start' },
          { text: '配置说明', link: '/config' },
          { text: '接口文档', link: '/api' }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/cecloudx/docs' },
    ],

    editLink: {
      pattern: 'https://github.com/cecloudx/docs/edit/main/docs/:path',
      // text: 'Edit this page on GitHub'
      text: '在Github编辑'
    },
  }
})
