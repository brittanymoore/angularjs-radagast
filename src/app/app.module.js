import angular from 'angular';

// app component
import AppComponent from './app.component';

// routing
import uiRouter from '@uirouter/angularjs';
import routes from './app-routing.config';

// modules
import radagast from './radagast/radagast.module';

// components
import Step1Component from './components/step-1/step-1.component';
import Step2Component from './components/step-2/step-2.component';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ uiRouter, radagast ])
    .component('myApp', AppComponent)
    .component('step1', Step1Component)
    .component('step2', Step2Component)
    .config(routes.config);

export default MODULE_NAME;
