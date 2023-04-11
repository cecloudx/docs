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
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 工一数字'
    },

    // algolia: {
    //     appId: 'N26XKP71HQ', // 需要替换
    //     apiKey: 'b68973e86f1cea6fe107eecb587b3d40', // 需要替换
    //     indexName: 'cc-index', // 需要替换
    //     // placeholder: '请输入关键词',
    //     // buttonText: '搜索'
    // },

    // import { defineConfig } from 'vitepress'

    // export default defineConfig({

    
        algolia: {
          appId: 'N26XKP71HQ',
          apiKey: '...',
          indexName: 'b68973e86f1cea6fe107eecb587b3d40',
          locales: {
            zh: {
              placeholder: '搜索文档',
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档'
                },
                modal: {
                  searchBox: {
                    resetButtonTitle: '清除查询条件',
                    resetButtonAriaLabel: '清除查询条件',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消'
                  },
                  startScreen: {
                    recentSearchesTitle: '搜索历史',
                    noRecentSearchesText: '没有搜索历史',
                    saveRecentSearchButtonTitle: '保存至搜索历史',
                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                    favoriteSearchesTitle: '收藏',
                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                  },
                  errorScreen: {
                    titleText: '无法获取结果',
                    helpText: '你可能需要检查你的网络连接'
                  },
                  footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                    searchByText: '搜索提供者'
                  },
                  noResultsScreen: {
                    noResultsText: '无法找到相关结果',
                    suggestedQueryText: '你可以尝试查询',
                    reportMissingResultsText: '你认为该查询应该有结果？',
                    reportMissingResultsLinkText: '点击反馈'
                  }
                }
              }
            }
          }
        },
   






    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },

      {text: '版本',
      items: [     
        { text: 'v2.0', link: '/start' },
        { text: 'v1.9', link: '/start' },
        { text: 'v1.2', link: '/start' },
        { text: 'v1.0', link: '/start' },
        // { text: '愿景', link: '/vision' }
      ]}    

    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '快速开始', link: '/start' },
          { text: '下载', link: '/download' },
          { text: '配置', link: '/config' },
          { text: '接口', link: '/api' }

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
