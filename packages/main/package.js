Package.describe({
  name: 'main',
  version: '0.0.1',
  summary: 'main entry of this app',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('commonlib');

  api.addFiles([
    'client/components/layout/Footer.jsx',
    'client/components/layout/Header.jsx',
    'client/components/layout/MainLayout.jsx',
    'client/components/users/UserLogin.jsx',
    'client/components/Home.jsx',
    'client/stylesheets/main.scss'
  ], 'client');

  api.addFiles([
    'routes.jsx'
  ]);

  api.addFiles([
    'server/bootstrap.jsx'
  ], 'server');

});

