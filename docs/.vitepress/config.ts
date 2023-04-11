import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  title: "工一数字",
  description: "description",
  themeConfig: {
    logo: '/logo.svg',
    // siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '下载', link: '/download' },
          { text: '接口文档', link: '/api' }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/cecloudx/docs' },
    ],

    editLink: {
      pattern: 'https://github.com/cecloudx/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
  }
})
