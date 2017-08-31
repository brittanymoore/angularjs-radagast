const wizardPreviousDirective = function() {
    
    return {
        restrict: 'A',
        require: '^radWizard',
        scope: {
            beforeNext: '@'
        },
        link: function($scope, $element, $attrs, $ctrl) {

            $element.bind('click', (event) => {
                const passThrough = ($scope.beforeNext) ? $scope.beforeNext() : true;
                if (passThrough) {
                    $ctrl.stepBackward();
                }
            });

        }
    };

};

wizardPreviousDirective.$inject = [];

export default wizardPreviousDirective;
