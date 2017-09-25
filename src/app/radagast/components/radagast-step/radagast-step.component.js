class RadagastStepController {

    constructor($scope) {
        this.$scope = $scope;
        this.activeStep;
        // bindings
        this.wizardController;
        this.name;
        this.order;
    }

    $onInit() {
        this.wizardController.addStep(this.name, this.order);
    }

}

export const RadagastStepComponent = {

    template: require('./radagast-step.component.html'),
    controller: RadagastStepController,
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

export const RadagastStepComponentSelector = 'radWizardStep';
