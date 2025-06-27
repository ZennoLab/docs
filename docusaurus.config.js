// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Документация ZennoLab',
  tagline: 'Простейший способ автоматизировать работу без знания кода',
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

  onBrokenLinks: 'warn',
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
          path: 'docs/ZennoDroid',
          routeBasePath: 'zennodroid',
          /*routeBasePath: '/',
          showLastUpdateTime: true,
            return locale === 'ru'
              ? `https://github.com/ZennoLab/zennodroid-docs/tree/dev/${versionDocsDirPath}/${docPath}`
              : `https://github.com/ZennoLab/zennodroid-docs/tree/dev/i18n/en/docusaurus-plugin-content-docs/current/${docPath}`;*/
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

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'zennoposter',
        path: 'docs/ZennoPoster',
        routeBasePath: 'zennoposter',
        sidebarPath: './sidebars-zennoposter.js',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ZennoLab Docs',
        logo: {
          alt: 'ZennoLab Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'search',
            position: 'left', 
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'ZennoDroid',
            docsPluginId: 'default',
          },
          {
            type: 'docSidebar',
            sidebarId: 'zennoposterSidebar',
            position: 'right',
            label: 'ZennoPoster',
            docsPluginId: 'zennoposter',
          },
          {to: '/blog', label: 'Блог', position: 'right'},
          {type: 'localeDropdown', position: 'right'},
          {
            href: 'https://zennolab.com',
            label: 'ZennoLab',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: '2BMNH9NBSS',
        apiKey: 'a9d097920f0ecd9668a0e40e61329caa',
        indexName: 'zennodroid-pages',
        // Опциональные настройки
        contextualSearch: true,
        searchPagePath: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ZennoDroid',
            items: [
              {
                label: 'Основные понятия',
                to: '/zennodroid/get-started/BasicTerms',
              },
              {
                label: 'Подключение реального устройства (ZDE)',
                to: '/zennodroid/get-started/Connection',
              },
              {
                label: 'Интерфейс ProjectMaker',
                to: '/zennodroid/category/интерфейс',
              },
            ],
          },
          {
            title: 'ZennoPoster',
            items: [
              {
                label: 'Основы',
                to: '/zennoposter/basics/getting-started',
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
                label: 'ZennoLab',
                href: 'https://zennolab.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ZennoLab`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.shadesOfPurple,
        additionalLanguages: [
          'json',
          'java',
          'bash',
          'csharp',
          'http'
        ],
      },
    }),
};

export default config;