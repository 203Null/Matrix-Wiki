import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '203 Systems',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://matrix.203.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '203-Systems', // Usually your GitHub org/user name.
  projectName: 'Matrix-Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']//, 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/203-Systems/Matrix-Wiki/tree/master/',
          versions: {
              current: {
                label: 'Latest 🚧',
              },
            },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/203-Systems/Matrix-Wiki/tree/master/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'GTM-5B334X6T',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      versionPersistence: 'localStorage',
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      // title: '203 Systems',
      logo: {
        alt: '203 Systems',
        src: 'img/203.svg',
        srcDark: 'img/203dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mystrixSidebar',
          position: 'left',
          label: 'Mystrix',
        },
        {
          type: 'docSidebar',
          sidebarId: 'matrixOSSidebar',
          position: 'left',
          label: 'Matrix OS',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developerSidebar',
          position: 'left',
          label: 'Developer',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'Resources',
        },
        {
          type: 'docSidebar',
          sidebarId: 'supportSidebar',
          position: 'left',
          label: 'Support',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        // Disable Chinese for now
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        content: `Sales of Mystrix have ended. Thank you for supporting Project Matrix! ❤️`,
      // The application ID provided by Algolia
      appId: 'NX86NL0BFF',

      // Public API key: it is safe to commit it
      apiKey: '39f74a16abae5976cd799acc6a758192',

      indexName: 'matrix-203',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

function getNextVersionName() {
  return 'Canary';
}

export default config;
