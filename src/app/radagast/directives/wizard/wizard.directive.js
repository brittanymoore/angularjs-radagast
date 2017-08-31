import Step from './../../step';

class WizardController {

    constructor(radagastService, $rootScope, $timeout, $scope) {
       
        this.radagastService = radagastService.getInstance();
        this.$rootScope = $rootScope;
        this.$timeout = $timeout;
        this.$scope = $scope;

        this.steps = [];
        this.activeStep = 1;

    }

    addStep(name, order) {
        this.steps.push(new Step(name, order));
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
            this.$timeout(() => { callback(...args); }, 0);
        });
        scope.$on('$destroy', () => {
            deregister();
        });
    }

}

WizardController.$inject = [ 'radagastService', '$rootScope', '$timeout', '$scope' ];

import './wizard.component.scss';

const wizardDirective = function() {

    return {
        restrict: 'E',
        template: require('./wizard.component.html'),
        controller: WizardController,
        controllerAs: 'vm',
        bindToController: true,
        scope: true,
        transclude: true
    };

};

wizardDirective.$inject = [];

export default wizardDirective;
