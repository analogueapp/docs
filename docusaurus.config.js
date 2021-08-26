module.exports = {
  title: 'Analogue',
  tagline: 'Documentation',
  url: 'https://analogue.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'analogueapp', // Usually your GitHub org/user name.
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
        href: 'https://analogue.com/about'
      },
      links: [
        {
          label: 'Docs',
          to: 'docs/api',
          activeBasePath: 'docs',
          position: 'left',
        },
        {
          href: 'https://github.com/analogueapp',
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
            'https://github.com/analogueapp/docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/analogueapp/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
