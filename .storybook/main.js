const path = require('path')
module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/Atoms/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/Molecules/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/Organisms/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/Template/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/Pages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  staticDirs: ["../public"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '/assets/fonts/brant/brant-bold-webfont.woff2': path.resolve(__dirname, "../public/assets/fonts/brant/brant-bold-webfont.woff2"),
      '/assets/fonts/brant/brant-bold-webfont.woff': path.resolve(__dirname, "../public/assets/fonts/brant/brant-bold-webfont.woff"),
    };

    return config;
  }
};
