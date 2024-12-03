import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  title: "工一",
  description: "description",
  themeConfig: {
    // logo: '/logo.svg',
    // siteTitle: false,

    outlineTitle: '本页目录',
    // outline:2,
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 工一'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdatedText: '更新日期',
    // darkModeSwitch: true, // 启用夜间模式切换按钮
    darkModeSwitchLabel: '切换夜间模式', // 设置夜间模式切换按钮的标签文本
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '切换语言',

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
          appId: '73IJU6ADKC',
          apiKey: '7e4405efbed23a4f714816d23ca1302a',
          indexName: 'docs-index',
          // locales: {
          //   zh: {
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
          //   }
          // }
        },
   






    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/cc/' },

      {text: '文档',
      items: [     
        { text: 'V2.4.2', link: '/cc/' },
        // { text: '工一ERP', link: '/erp/' }
        // { text: 'v1.4', link: '/start' },
        // { text: 'v1.3', link: '/start' },
        // { text: 'v1.2', link: '/start' },
        // { text: 'v1.1', link: '/start' },
        // { text: 'v1.0', link: '/start' },
        // { text: '愿景', link: '/vision' }
      ]}    

    ],

    sidebar: {
      
      '/cc/': [
        {
          text: '工一云电脑',
          items: [
            { text: '快速开始', link: '/cc/' },
            { text: '下载', link: '/cc/download' },
            { text: '功能', link: '/cc/features' },
            { text: '配置', link: '/cc/config' },
            { text: '接口', link: '/cc/api' }
          ]
        },
      ],

      //'/erp/': [
       //{
          //text: '工一ERP',
          //items: [
            //{ text: '快速开始', link: '/erp/' },
            // { text: '简介', link: '/erp/introduction' },
            // { text: '功能', link: '/erp/features' },
            // { text: '下载', link: '/erp/download' },
            // { text: '配置', link: '/erp/config' },
            // { text: '接口', link: '/erp/api' }
          //]
        //}
      //]


    },


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


