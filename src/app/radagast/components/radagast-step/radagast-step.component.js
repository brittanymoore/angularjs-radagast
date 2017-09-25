class RadagastStepController {

    constructor($scope) {

        this.$scope = $scope;
        this.activeStep;

        // bindings
        this.wizardController;
        this.name;
        this.order;
        this.validateFn;

    }

    $onInit() {
        this.wizardController.addStep(this.name, this.order);
        this.wizardController.subscribeToMoveStep(this.$scope, (_event, index) => {
            this.activeStep = index;
        });
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
