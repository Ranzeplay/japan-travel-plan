import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "日本旅行计划",
  description: "我的日本旅行计划",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 4],
    nav: [
      { text: '首页', link: '/' },
      { text: '整理好的计划', link: '/plan/index' },
      { text: '个人主页', link: 'https://ranzeplay.space' }
    ],

    sidebar: [
      {
        text: '整理好的计划',
        items: [
          { text: '总览', link: '/plan/index' },
          { text: '城市', link: '/plan/cities' },
          { text: '行前准备', link: '/plan/prep' },
          { text: '时间表', link: '/plan/timetable' }
        ]
      },
      {
        text: '草稿',
        items: [
          { text: '总览', link: '/sketch/index' },
          { text: 'DeepSeek的评价', link: '/sketch/ds-review' },
          { text: 'DeepSeek的计划', link: '/sketch/ds-plan' },
          { text: 'DeepSeek的计划：先关西后关东', link: '/sketch/ds-plan-ew-switched' },
          { text: 'DeepSeek坐夜间巴士', link: '/sketch/ds-optmz-night-express' },
          { text: '豆包的旅行计划', link: '/sketch/doubao-plan-initial' },
          { text: '豆包的旅行计划（夜间巴士版）', link: '/sketch/doubao-plan-night-express' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ranzeplay/japan-travel-plan' },
      { icon: 'x', link: 'https://x.com/ranzeplay' }
    ],

    footer: {
      copyright: 'Copyright © 2025-present Jeb Feng'
    },

    search: {
      provider: 'local'
    }
  }
})
