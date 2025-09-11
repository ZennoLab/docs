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

  // Добавляем мета-тег для отключения индексации всех поисковиков
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'noindex, nofollow, nosnippet, noarchive',
      },
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zennolab', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

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
          id: 'zennodroid',
          sidebarPath: './sidebars.js',
          path: 'docs/ZennoDroid',
          routeBasePath: 'zennodroid',
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            return locale === 'ru'
              ? `https://github.com/ZennoLab/docs/tree/dev/docs/ZennoDroid/${docPath}`
              : `https://github.com/ZennoLab/docs/tree/dev/i18n/en/docusaurus-plugin-content-docs-zennodroid/current/${docPath}`;
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-VZ3ZEFVL7L',
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
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          return locale === 'ru'
            ? `https://github.com/ZennoLab/docs/tree/dev/docs/ZennoPoster/${docPath}`
            : `https://github.com/ZennoLab/docs/tree/dev/i18n/en/docusaurus-plugin-content-docs-zennoposter/current/${docPath}`;
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'zennoproxy',
        path: 'docs/ZennoProxy',
        routeBasePath: 'zennoproxy',
        sidebarPath: './sidebars-zennoproxy.js',
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          return locale === 'ru'
            ? `https://github.com/ZennoLab/docs/tree/dev/docs/ZennoProxy/${docPath}`
            : `https://github.com/ZennoLab/docs/tree/dev/i18n/en/docusaurus-plugin-content-docs-zennoproxy/current/${docPath}`;
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'zennobrowser',
        path: 'docs/ZennoBrowser',
        routeBasePath: 'zennobrowser',
        sidebarPath: './sidebars-zennobrowser.js',
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          return locale === 'ru'
            ? `https://github.com/ZennoLab/docs/tree/dev/docs/ZennoBrowser/${docPath}`
            : `https://github.com/ZennoLab/docs/tree/dev/i18n/en/docusaurus-plugin-content-docs-zennobrowser/current/${docPath}`;
        },
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
          {type: 'localeDropdown', position: 'right'},
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
        copyright: `ZennoLab.com © 2008-${new Date().getFullYear()}`,
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