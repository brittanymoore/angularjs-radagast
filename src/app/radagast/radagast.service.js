export class RadagastService {

    constructor($rootScope) {

        this.$rootScope = $rootScope;

        this.stepCount = 0;
        this.activeStep = 1;
        this.steps = [];

    }

    publishSteps(steps) {
        this.$rootScope.$emit('steps', steps);
    }

    subscribeToSteps(scope, callback) {
        const deregister = this.$rootScope.$on('steps', callback);
        scope.$on('$destroy', () => {
            deregister();
        });
    }

    publishMove(index) {
        this.$rootScope.$emit('step-move', index);
    }

    subscribeToStepMove(scope, callback) {
        const deregister = this.$rootScope.$on('steps', callback);
        scope.$on('$destroy', () => {
            deregister();
        });
    }

}
