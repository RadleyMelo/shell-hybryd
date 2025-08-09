const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const mfConfig = withModuleFederationPlugin({
  name: 'products',
  exposes: {
    './Routes': './src/app/remote.routes.ts',
    './ProductsListComponent': './src/app/products/products-list.component.ts',
  },
  shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
});

module.exports = {
  ...mfConfig,
  optimization: {
    ...mfConfig.optimization,
    splitChunks: { chunks: 'all' },
  },
  output: {
    ...mfConfig.output,
    chunkFilename: '[name].js',
  },
};
