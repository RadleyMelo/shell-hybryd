const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const mfConfig = withModuleFederationPlugin({
  remotes: {
    products: 'products@http://localhost:4201/remoteEntry.js',
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
