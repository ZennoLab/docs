// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Документация ZennoDroid',
  tagline: 'Простейший способ автоматизировать приложения для Android без знания кода',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.zennolab.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zennolab', // Usually your GitHub org/user name.
  projectName: 'zennodroid', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-VZ3ZEFVL7L'
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ZennoDroid Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Документация',
          },
          {to: '/blog', label: 'Блог', position: 'left'},
          {type: 'localeDropdown', position: 'right'},
          {
            href: 'https://zennolab.com/en/products/zennodroid/',
            label: 'ZennoDroid',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Избранные статьи',
            items: [
              {
                label: 'Основные понятия',
                to: '/docs/get-started/BasicTerms',
              },
              {
                label: 'Подключение реального устройства (ZDE)',
                to: '/docs/get-started/Connection',
              },
              {
                label: 'Интерфейс ProjectMaker',
                to: '/docs/category/интерфейс',
              },
              {
                label: 'Логические операции',
                to: '/docs/category/логика-в-zd',
              },
              {
                label: 'Нюансы работы с Android',
                to: '/docs/category/android',
              },
            ],
          },
          {
            title: 'Больше',
            items: [
              {
                label: 'Блог',
                to: '/blog',
              },
              {
                label: 'ZennoDroid',
                href: 'https://zennolab.com/en/products/zennodroid/',
              },
              {
                label: 'Другие продукты ZennoLab',
                href: 'https://zennolab.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ZennoDroid by ZennoLab`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
