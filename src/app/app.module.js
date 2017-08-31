import angular from 'angular';

// app component
import AppComponent from './app.component';

// routing
import uiRouter from '@uirouter/angularjs';
import routes from './app-routing.config';

// modules
import radagast from './radagast/radagast.module';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ uiRouter, radagast ])
    .component('myApp', AppComponent)
    .config(routes.config);

export default MODULE_NAME;
