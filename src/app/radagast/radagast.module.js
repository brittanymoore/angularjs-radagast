import angular from 'angular';

import { RadagastMasterComponent, RadagastMasterComponentSelector } from './components/radagast-master/radagast-master.component';
import { RadagastStepComponent, RadagastStepComponentSelector } from './components/radagast-step/radagast-step.component';

const MODULE_NAME = 'app.radagast';

angular.module(MODULE_NAME, [])
    .component(RadagastMasterComponentSelector, RadagastMasterComponent)
    .component(RadagastStepComponentSelector, RadagastStepComponent);

export default MODULE_NAME;
