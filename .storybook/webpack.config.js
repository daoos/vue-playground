const path = require('path');
const docsLoader = path.resolve(
  __dirname,
  '..',
  '..',
  'storybook-readme',
  'env',
  'vue',
  'docs-loader'
);

module.exports = (storybookBaseConfig, configType) => {
    storybookBaseConfig.module.rules = storybookBaseConfig.module.rules.map(
        rule => {
            if (rule.loader.indexOf('vue-loader') !== -1) {
                return Object.assign({}, rule, {
                    options: Object.assign({}, rule.options, {
                        loaders: {
                            docs: [
                                'storybook-readme/env/vue/docs-loader',
                                docsLoader,
                                'markdown-loader',
                            ],
                        },
                        include: path.resolve(__dirname, '../src')
                    }),
                });
            }

            return rule;
        }
    );

    storybookBaseConfig.module.rules.push({
        test: /\.md$/,
        use: [
            {
                loader: 'raw-loader',
            },
        ],
    });

    storybookBaseConfig.module.rules.push({
        test: /\.css$/,
        use: [
            'vue-style-loader',
            'css-loader'
        ],
    });

    storybookBaseConfig.module.rules.push({
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
    });

    // NOTE: this alias is needed only for this example
    Object.assign(storybookBaseConfig.resolve.alias, {
        '@storybook/addons': path.resolve(
            __dirname,
            '..',
            'node_modules',
            '@storybook',
            'addons'
        ),
    });

    return storybookBaseConfig;
};