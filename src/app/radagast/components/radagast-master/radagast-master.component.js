class RadagastMasterController {

    constructor($rootScope, $scope, $timeout) {

        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$timeout = $timeout;

        this.MOVE_STEP_MESSAGE = 'radagast-move-step';

        this.steps = [];
        this.activeStep = 1;

    }

    $postLink() {
        this.goToActiveStep();
    }

    goToActiveStep() {
        this.publishMoveStep(this.activeStep);
    }

    stepForward() {
        this.activeStep++;
        this.goToActiveStep();
    }

    stepBack() {
        this.activeStep--;
        this.goToActiveStep();
    }

    addStep(name, order) {
        this.steps.push({ name: name, order: order });
    }

    subscribeToMoveStep(scope, callback) {
        const deregister = scope.$on(this.MOVE_STEP_MESSAGE, (...args) => {
            this.$timeout(() => {
                callback(...args);
            }, 0);
        });
        scope.$on('$destroy', () => {
            deregister();
        });
    }

    publishMoveStep(index) {
        this.$scope.$broadcast(this.MOVE_STEP_MESSAGE, index);
    }

}

import './radagast-master.component.scss';

export const RadagastMasterComponent = {
    template: require('./radagast-master.component.html'),
    controller: RadagastMasterController,
    controllerAs: 'vm',
    bindings: { },
    transclude: true
};

export const RadagastMasterComponentSelector = 'radWizard';
