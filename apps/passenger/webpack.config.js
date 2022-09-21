const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'passenger',

  exposes: {
    './module': './apps/passenger/src/app/passenger/passenger.module.ts',
    './title-component': './apps/passenger/src/app/title/title.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  // sharedMappings: []
});
