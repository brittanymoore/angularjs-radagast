export const RadagastPreviousDirectiveSelector = 'radPrevious';

export function RadagastPreviousDirective() {

    return {
        restrict: 'A',
        require: {
            wizardController: '^radWizard'
        },
        scope: {
            beforePrevious: '&?'
        },
        link: function($scope, $element, $attrs, $ctrl) {

            $element.bind('click', (_event) => {
                const passThrough = ($scope.beforePrevious) ? $scope.beforePrevious() : true;
                if (passThrough) {
                    $ctrl.wizardController.stepBack();
                }
            });

        }
    };

}
