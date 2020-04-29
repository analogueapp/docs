module.exports = {
  title: 'Analogue',
  tagline: 'Documentation',
  url: 'https://analogue.app',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'analogue-app', // Usually your GitHub org/user name.
  projectName: 'analogue', // Usually your repo name.
  themeConfig: {
    // TODO add algolia search
    // algolia: {
    //   apiKey: '766d56f13dd1e82f43253559b7c86636',
    //   indexName: 'supabase',
    // },
    defaultDarkMode: true,
    darkMode: true,
    image: 'https://analogue.onrender.com/img/analogue-og.png',

    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Analogue',
        src: 'img/logo_icon.png',
        href: 'https://analogue.app/about'
      },
      links: [
        {
          label: 'Docs',
          to: 'docs/api',
          activeBasePath: 'docs',
          position: 'left',
        },
        {
          href: 'https://github.com/analogue-app',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/analogue-app/docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/analogue-app/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
