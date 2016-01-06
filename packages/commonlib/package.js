Package.describe({
  name: 'commonlib',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'common lib for app',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.imply([
    'react',
    'kadira:flow-router',
    'kadira:react-layout',
    'fourseven:scss',
    'reywood:bootstrap3-sass',
    'accounts-password'
  ]);
});






