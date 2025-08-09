const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'products',
  exposes: {
    './Routes': './src/app/remote.routes.ts',
    './ProductsListComponent': './src/app/products/products-list.component.ts'
  },
  shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
});
