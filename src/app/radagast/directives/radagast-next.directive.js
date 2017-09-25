export const RadagastNextDirectiveSelector = 'radNext';

export function RadagastNextDirective() {

    return {
        restrict: 'A',
        require: {
            wizardController: '^radWizard'
        },
        scope: {
            beforeNext: '&?'
        },
        link: function($scope, $element, $attrs, $ctrl) {

            $element.bind('click', (_event) => {
                const passThrough = ($scope.beforeNext) ? $scope.beforeNext() : true;
                console.log($scope.beforeNext);
                if (passThrough) {
                    $ctrl.wizardController.stepForward();
                }
            });

        }
    };

}
