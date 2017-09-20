import Step from './../../step';

class WizardController {

    constructor(radagastService, $timeout, $scope) {

        this.radagastService = radagastService.getInstance();
        this.$timeout = $timeout;
        this.$scope = $scope;

        this.steps = [];
        this.activeStep = 1;

    }

    addStep(name, order) {
        this.steps.push(new Step(name, order));
    }

    goToStep(index) {
        console.log(index);
        this.activeStep = index;
        this.goToActiveStep();
    }

    goToActiveStep() {
        this.publishActiveStep(this.activeStep);
    }

    stepForward() {
        if (this.activeStep < this.steps.length) {
            this.activeStep = this.activeStep + 1;
            this.goToActiveStep();
        }
    }

    stepBackward() {
        if (this.activeStep > 1) {
            this.activeStep = this.activeStep - 1;
            this.goToActiveStep();
        }
    }

    $postLink() {
        this.goToActiveStep();
    }

    publishActiveStep(stepIndex) {
        this.$scope.$broadcast('active-step', stepIndex);
    }

    subscribeToActiveStep(scope, callback) {
        const deregister = scope.$on('active-step', (...args) => {
            this.$timeout(() => {
                callback(...args);
            }, 0);
        });
        scope.$on('$destroy', () => {
            deregister();
        });
    }

}

import './wizard.component.scss';

export const WizardComponent = {
    template: require('./wizard.component.html'),
    controller: WizardController,
    controllerAs: 'vm',
    bindings: { },
    transclude: true
};
