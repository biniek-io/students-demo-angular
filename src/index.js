import angular from 'angular';

import app from './app';
import ngResource from 'angular-resource';
import angularMaterial from 'angular-material';
import angularUiRouter from 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const appName = 'students';

angular
  .module(appName, [
    app,
    angularUiRouter,
    ngResource,
    angularMaterial
  ])
  .config(routesConfig);
