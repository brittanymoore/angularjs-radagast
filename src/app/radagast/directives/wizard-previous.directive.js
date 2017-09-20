export function wizardPreviousDirective() {

    return {
        restrict: 'A',
        require: '^radWizard',
        scope: {
            beforeNext: '@'
        },
        link: function($scope, $element, $attrs, $ctrl) {

            $element.bind('click', (_event) => {
                const passThrough = ($scope.beforeNext) ? $scope.beforeNext() : true;
                if (passThrough) {
                    $ctrl.stepBackward();
                }
            });

        }
    };

};
