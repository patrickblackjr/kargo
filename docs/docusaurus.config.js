// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kargo Docs',
  url: 'https://docs.kargo.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/kargo.png',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          routeBasePath: '/', // Serve the docs at the site's root
          includeCurrentVersion: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.1.x',
              path: '/',
              banner: 'none',
              badge: true,
            },
            "1.0.x": {
              label: '1.0.x',
              banner: 'none',
              path: '1.0.x',
            },
            "0.x.x": {
              label: '0.x.x',
              banner: 'unmaintained',
              path: '0.x.x',
            },
          }
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      path.join(__dirname, "plugins", "gtag", "lib"),
      {
        trackingID: 'G-0LYKG06H98',
        anonymizeIP: true,
      },
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Kargo Docs',
        logo: {
          alt: 'Kargo Documentation',
          src: 'img/kargo.png',
          href: '/',
          target: '_self',
        },
        items: [
          {
            href: 'https://akuity.io/',
            label: 'Akuity.io',
            position: 'left',
          },
          {
            href: 'https://kargo.io/',
            label: 'Kargo.io',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/akuity/kargo',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'http://akuity.community',
            label: 'Discord Community',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Akuity`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
      },
      metadata: [{name: 'akuity, argoproj, argo cd, argo workflows, argo events, argo rollouts, kubernetes, gitops, devops', content: 'akuity, documentation, developer documentation'}],
    }),
};

module.exports = config;
