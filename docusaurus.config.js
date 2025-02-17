// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "r/realme Community",
  tagline: "The unofficial community for realme users.",
  url: "https://realme.pages.dev/",
  trailingSlash: true,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/raymond-1227/rmcommunity/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "about",
        path: "about",
        routeBasePath: "about",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/raymond-1227/rmcommunity/edit/main/",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "realme",
          content: "android, phone, realme, rooting, tweaking",
        },
      ],
      navbar: {
        hideOnScroll: true,
        title: "r/realme Community",
        logo: {
          alt: "realme Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "rules",
            position: "left",
            label: "Docs",
          },
          {
            to: "/about/mods",
            label: "About",
            position: "left",
            activeBaseRegex: `/about/`,
          },
          {
            href: "https://www.realme.com/",
            label: "realme",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentations",
            items: [
              {
                label: "Rules",
                to: "/docs/rules",
              },
              {
                label: "About",
                to: "/about/mods",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Official realme Community",
                href: "https://c.realme.com/",
              },
              {
                label: "Unofficial realme Subreddit",
                href: "https://www.reddit.com/r/Realme/",
              },
              {
                label: "Unofficial realme Discord",
                href: "https://discord.gg/5D6UPMTdjy/",
              },
            ],
          },
          {
            title: "Contribute",
            items: [
              {
                label: "Improve the Documentation",
                href: "https://github.com/raymond-1227/rmcommunity/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} r/realme Community. NOT associated with realme officially.`,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "L8B5EEGHVG",

        // Public API key: it is safe to commit it
        apiKey: "c712895dcc17ef027437c90905a3b4bb",

        indexName: "rm-search",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
