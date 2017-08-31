class WizardStepController {

    constructor() {
        this.activeStep = null;
    }

}

import './wizard-step.component.scss';

const wizardStepDirective = function() {

    return {
        restrict: 'E',
        template: require('./wizard-step.component.html'),
        controller: WizardStepController,
        controllerAs: 'vm',
        scope: {
            name: '@',
            order: '@'
        },
        bindToController: true,
        transclude: true,
        require: '^radWizard',
        link: function($scope, $element, $attrs, $ctrl) {

            const controller = $scope.vm;

            $ctrl.addStep(controller.name, controller.order);
            $ctrl.subscribeToActiveStep($scope, (event, activeStep) => {
                controller.activeStep = activeStep;
                console.log('subscription', activeStep);
            });

        }
    };

};

wizardStepDirective.$inject = [];

export default wizardStepDirective;
