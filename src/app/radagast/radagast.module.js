import angular from 'angular';

// components
import { WizardComponent } from './components/wizard/wizard.component';
import { WizardStepComponent } from './components/wizard-step/wizard-step.component';

// directives
import { wizardNextDirective } from './directives/wizard-next.directive';
import { wizardPreviousDirective } from './directives/wizard-previous.directive';

// services
import { RadagastService } from './radagast.service';

const MODULE_NAME = 'radagast';

angular.module(MODULE_NAME, [])
    .component('radWizard', WizardComponent)
    .component('radWizardStep', WizardStepComponent)
    .directive('radNext', wizardNextDirective)
    .directive('radPrevious', wizardPreviousDirective)
    .factory('radagastService', () => {
        return {
            getInstance: function() {
                return new RadagastService();
            }
        };
    });

export default MODULE_NAME;
