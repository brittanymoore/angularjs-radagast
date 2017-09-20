class WizardStepController {

    constructor($scope) {
        this.activeStep = null;
        this.$scope = $scope;
    }

    $onInit() {
        this.wizardController.addStep(this.name, this.order);
        this.wizardController.subscribeToActiveStep(this.$scope, (event, activeStep) => {
            this.activeStep = activeStep;
        });
    }

}

import './wizard-step.component.scss';

export const WizardStepComponent = {

    template: require('./wizard-step.component.html'),
    controller: WizardStepController,
    controllerAs: 'vm',
    bindings: {
        name: '@',
        order: '@'
    },
    transclude: true,
    require: {
        wizardController: '^radWizard'
    }

};
