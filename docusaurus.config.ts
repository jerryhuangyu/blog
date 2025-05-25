import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Huang-Yu",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  plugins: ["./src/plugins/tailwind-config.js", "./src/plugins/path-alias.js"],

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/blogs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jerryhuangyu",
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "blogs",
          routeBasePath: "/",
          showLastUpdateTime: true,
          sidebarPath: "./sidebars.ts",
          breadcrumbs: false,
          // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // https://github.com/easyops-cn/docusaurus-search-local?tab=readme-ov-file#theme-options
        hashed: true,
        indexDocs: true,
        indexPages: true,
        language: ["en", "zh"],
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Huang-Yu",
      logo: {
        alt: "Huang-Yu Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Blog",
        },
        {
          href: "/blogs/tags",
          position: "left",
          label: "Tags",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          className: "header--github-link",
          "aria-label": "GitHub repository",
          position: "right",
        },
      ],
    },
    // announcementBar: {
    //   id: "support_us", // Any unique ID
    //   content:
    //     '⭐️ If you like this project, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a>! ⭐️',
    //   backgroundColor: "#fafbfc",
    //   textColor: "#091E42",
    //   isCloseable: true,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
