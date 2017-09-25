import angular from 'angular';

import { RadagastMasterComponent, RadagastMasterComponentSelector } from './components/radagast-master/radagast-master.component';
import { RadagastStepComponent, RadagastStepComponentSelector } from './components/radagast-step/radagast-step.component';

import { RadagastNextDirective, RadagastNextDirectiveSelector } from './directives/radagast-next.directive';
import { RadagastPreviousDirective, RadagastPreviousDirectiveSelector } from './directives/radagast-previous.directive';

const MODULE_NAME = 'app.radagast';

angular.module(MODULE_NAME, [])
    .component(RadagastMasterComponentSelector, RadagastMasterComponent)
    .component(RadagastStepComponentSelector, RadagastStepComponent)
    .directive(RadagastNextDirectiveSelector, RadagastNextDirective)
    .directive(RadagastPreviousDirectiveSelector, RadagastPreviousDirective);

export default MODULE_NAME;
