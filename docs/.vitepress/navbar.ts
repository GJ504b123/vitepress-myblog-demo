// docs/.vitepress/relaConf/index.ts 配置内容较多，单独起个文件
export * from './navbar';

// docs/.vitepress/relaConf/navbar.ts
import {
    DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
   
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
   
    text: '朝花夕拾',
    items: [
      {
   
        text: '上下求索',
        items: [
            {  
              text: '前端开发',
              link: '/column/Algorithm/' // 对应docs/column/Algorithm下的idnex.md文件
            },
            {  
              text: 'Markdown语法',
              link:'/content/tech/markdown/markdown-basic.md'// 对应docs/column/Algorithm下的idnex.md文件
            },
            {  
              text: '数据结构与算法',
              link: '/column/Algorithm/' // 对应docs/column/Algorithm下的idnex.md文件
            }
        ]

      },
      {
   
        text: '长歌当哭',
        link: '/content/thoughts/self-introduction' // 表示docs/column/Growing/index.md
      }
    ]
  },
  {
   
    text: '关于我',
    items: [
      {
    text: 'Github', link: 'https://github.com/Jacqueline712' },
      {
   
        text: '博客园',
        link: 'https://www.cnblogs.com/GJ504b'
      },
      {
   
        text: 'Github',
        link: 'https://github.com/GJ504b123'
      }
    ]
  }
];



export const sidebar: DefaultTheme.Sidebar = {
 
// /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
'/content/tech/markdown': [
   // 第一部分
   {
    text:'markdown基础版',
    link:'/content/tech/markdown/markdown-basic.md'
},
{
    text:'markdown进阶版',
    link:'/content/tech/markdown/markdown-improvement.md'
},
]
};
