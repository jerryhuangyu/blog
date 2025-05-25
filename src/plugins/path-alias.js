const path = require('node:path');

export default function MyAliasPlugin(context, options) {
  return {
    name: 'path-alias-plugin',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            '@': path.resolve(__dirname, '../'),
          },
        },
      };
    },
  };
}