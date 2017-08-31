import angular from 'angular';

// directives
import wizardDirective from './directives/wizard/wizard.directive';
import wizardStepDirective from './directives/wizard-step/wizard-step.directive';
import wizardNextDirective from './directives/wizard-next.directive';
import wizardPreviousDirective from './directives/wizard-previous.directive';

// services
import RadagastService from './radagast.service';

const MODULE_NAME = 'radagast';

angular.module(MODULE_NAME, [])
    .directive('radWizard', wizardDirective)
    .directive('radWizardStep', wizardStepDirective)
    .directive('radNext', wizardNextDirective)
    .directive('radPrevious', wizardPreviousDirective)
    .factory('radagastService', () => {
        const radagastService = {
            getInstance: function() {
                return new RadagastService();
            }
        };
        return radagastService;
    });

export default MODULE_NAME;
