import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Foundry VTT Module Documentation',
  tagline: 'Documentation for Foundry VTT modules',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.rayners.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rayners', // Usually your GitHub org/user name.
  projectName: 'foundry-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese,
  // you may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'jj',
        path: 'journeys-and-jamborees',
        routeBasePath: 'journeys-and-jamborees',
        sidebarPath: './sidebars-jj.ts',
        editUrl: 'https://github.com/rayners/foundry-docs/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'argon',
        path: 'argon-dragonbane',
        routeBasePath: 'argon-dragonbane',
        sidebarPath: './sidebars-argon.ts',
        editUrl: 'https://github.com/rayners/foundry-docs/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'realms',
        path: 'realms-and-reaches',
        routeBasePath: 'realms-and-reaches',
        sidebarPath: './sidebars-realms.ts',
        editUrl: 'https://github.com/rayners/foundry-docs/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'seasons',
        path: 'seasons-and-stars',
        routeBasePath: 'seasons-and-stars',
        sidebarPath: './sidebars-seasons.ts',
        editUrl: 'https://github.com/rayners/foundry-docs/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'compat',
        path: 'simple-calendar-compat',
        routeBasePath: 'simple-calendar-compat',
        sidebarPath: './sidebars-compat.ts',
        editUrl: 'https://github.com/rayners/foundry-docs/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'errors',
        path: 'errors-and-echoes',
        routeBasePath: 'errors-and-echoes',
        sidebarPath: './sidebars-errors.ts',
        editUrl: 'https://github.com/rayners/foundry-docs/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'familiar',
        path: 'familiar',
        routeBasePath: 'familiar',
        sidebarPath: './sidebars-familiar.ts',
        editUrl: 'https://github.com/rayners/foundry-docs/tree/main/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: false, // Disable default docs plugin since we're using custom instances
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Foundry Modules',
      logo: {
        alt: 'Foundry Modules Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'jjSidebar',
          position: 'left',
          label: 'Journeys & Jamborees',
          docsPluginId: 'jj',
        },
        {
          type: 'docSidebar',
          sidebarId: 'argonSidebar',
          position: 'left',
          label: 'ARGON Dragonbane',
          docsPluginId: 'argon',
        },
        {
          type: 'docSidebar',
          sidebarId: 'realmsSidebar',
          position: 'left',
          label: 'Realms & Reaches',
          docsPluginId: 'realms',
        },
        {
          type: 'docSidebar',
          sidebarId: 'seasonsSidebar',
          position: 'left',
          label: 'Seasons & Stars',
          docsPluginId: 'seasons',
        },
        {
          type: 'docSidebar',
          sidebarId: 'compatSidebar',
          position: 'left',
          label: 'Calendar Compat',
          docsPluginId: 'compat',
        },
        {
          type: 'docSidebar',
          sidebarId: 'errorsSidebar',
          position: 'left',
          label: 'Errors & Echoes',
          docsPluginId: 'errors',
        },
        {
          type: 'docSidebar',
          sidebarId: 'familiarSidebar',
          position: 'left',
          label: 'Foundry Familiar',
          docsPluginId: 'familiar',
        },
        {
          href: 'https://github.com/rayners',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Modules',
          items: [
            {
              label: 'Journeys & Jamborees',
              to: '/journeys-and-jamborees/intro',
            },
            {
              label: 'ARGON Dragonbane',
              to: '/argon-dragonbane/intro',
            },
            {
              label: 'Realms & Reaches',
              to: '/realms-and-reaches/intro',
            },
            {
              label: 'Seasons & Stars',
              to: '/seasons-and-stars/intro',
            },
            {
              label: 'Calendar Compat',
              to: '/simple-calendar-compat/intro',
            },
            {
              label: 'Errors & Echoes',
              to: '/errors-and-echoes/intro',
            },
            {
              label: 'Foundry Familiar',
              to: '/familiar/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Foundry VTT',
              href: 'https://foundryvtt.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/foundryvtt',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/rayners',
            },
            {
              label: 'Issues',
              href: 'https://github.com/rayners/foundry-docs/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} David Raynes. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;