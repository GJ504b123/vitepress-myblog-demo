import { defineConfig } from 'vitepress'
import { nav } from './navbar';
import { sidebar } from './navbar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "GJ504b",
  description: "Welcome to GJ504b's World",
  themeConfig: {
    logo: '/Photo/touxiang.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
  
})
