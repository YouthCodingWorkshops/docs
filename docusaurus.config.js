// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YCW Developers',
  tagline: '',
  url: 'https://developer.learnycw.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'YouthCodingWorkshops', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/YouthCodingWorkshops/docs/tree/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'join-us',
        content:
          'We\'re looking to this is a bruh moment',
          backgroundColor: '#fafbfc',
          textColor: '#091E42',
          isCloseable: true
      },

      algolia: {
        appId: 'none',
        
        // This is safe to commit
        apiKey: 'none',

        indexName: 'none',
        contextualSearch: true
      },

      navbar: {
        title: 'YCW Developers',
        logo: {
          alt: 'YCW Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/YouthCodingWorkshops/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Main Page',
                to: 'https://learnycw.org',
              },
              {
                label: "YCW Status",
                to: 'https://status.learnycw.org',
              },
              {
                label: "AWS SSO",
                to: 'https://ycw.awsapps.com/start',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/vre9eb2nxg',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/ycwalameda',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/YouthCodingWorkshops/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Youth Coding Workshops. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
