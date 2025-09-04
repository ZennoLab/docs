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
          id: 'zennodroid',
          sidebarPath: './sidebars.js',
          path: 'docs/ZennoDroid',
          routeBasePath: 'zennodroid',
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            return locale === 'ru'
              ? `https://github.com/ZennoLab/docs/tree/dev/docs/ZennoDroid/${docPath}`
              : `https://github.com/ZennoLab/docs/tree/dev/i18n/en/docusaurus-plugin-content-docs-zennodroid/current/${docPath}`;
          },
          /*routeBasePath: '/',
          showLastUpdateTime: true,
            return locale === 'ru'
              ? `https://github.com/ZennoLab/docs/tree/dev/${versionDocsDirPath}/${docPath}`
              : `https://github.com/ZennoLab/docs/tree/dev/i18n/en/docusaurus-plugin-content-docs/current/${docPath}`;*/
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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'capmonster',
        path: 'docs/CapMonster',
        routeBasePath: 'capmonster',
        sidebarPath: './sidebars-capmonster.js',
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          return locale === 'ru'
            ? `https://github.com/ZennoLab/docs/tree/dev/docs/CapMonster/${docPath}`
            : `https://github.com/ZennoLab/docs/tree/dev/i18n/en/docusaurus-plugin-content-docs-capmonster/current/${docPath}`;
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
          {
            type: 'search',
            position: 'left', 
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'ZennoDroid',
            docsPluginId: 'zennodroid',
          },
          {
            type: 'docSidebar',
            sidebarId: 'zennoposterSidebar',
            position: 'right',
            label: 'ZennoPoster',
            docsPluginId: 'zennoposter',
          },
          {
            type: 'docSidebar',
            sidebarId: 'zennoproxySidebar',
            position: 'right',
            label: 'ZennoProxy',
            docsPluginId: 'zennoproxy',
          },
          {
            type: 'docSidebar',
            sidebarId: 'zennobrowserSidebar',
            position: 'right',
            label: 'ZennoBrowser',
            docsPluginId: 'zennobrowser',
          },
          {
            type: 'docSidebar',
            sidebarId: 'capmonsterSidebar',
            position: 'right',
            label: 'CapMonster',
            docsPluginId: 'capmonster',
          },
          // {to: '/blog', label: 'Блог', position: 'right'}, // Временно скрыто
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
            title: 'ZennoProxy',
            items: [
              {
                label: 'Начало работы',
                to: '/zennoproxy/basics/getting-started',
              },
            ],
          },
          {
            title: 'ZennoBrowser',
            items: [
              {
                label: 'Начало работы',
                to: '/zennobrowser/basics/getting-started',
              },
            ],
          },
          {
            title: 'CapMonster',
            items: [
              {
                label: 'Что такое CapMonster',
                to: '/capmonster/hello/WhatIsCapMonster',
              },
              {
                label: 'Ключевые возможности',
                to: '/capmonster/hello/KeyFeatures',
              },
            ],
          },
          {
            title: 'Больше',
            items: [
              // {
              //   label: 'Блог',
              //   to: '/blog',
              // }, // Временно скрыто
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