import RadagastModule from './../radagast.module';

class RadagastMasterMock {
    stepForward() {}
}

describe('RadagastNextDirective', () => {

    beforeEach(() => {
        angular.mock.module(RadagastModule);
    });

    let subjectElement;
    let parentMasterController;
    let $scope;

    describe('no function provided', () => {

        beforeEach(() => {
            angular.mock.inject(($compile, $rootScope) => {

                parentMasterController = new RadagastMasterMock();

                subjectElement = angular.element(`<button rad-next></button>`);
                subjectElement.data('$radWizardController', parentMasterController);
                $compile(subjectElement)($rootScope.$new());

            });
        });

        it('should create directive', () => {
            expect(subjectElement).toBeTruthy();
        });

    });

    describe('function provided', () => {

        beforeEach(() => {
            angular.mock.inject(($compile, $rootScope) => {

                parentMasterController = new RadagastMasterMock();

                $scope = $rootScope.$new();
                $scope.validate = function() {};

                subjectElement = angular.element(`<button rad-next before-next="validate()"></button>`);
                subjectElement.data('$radWizardController', parentMasterController);
                $compile(subjectElement)($scope);
                
            });
        });

        it('should create directive', () => {
            expect(subjectElement).toBeTruthy();
        });

        it('should move to next step', () => {

            spyOn(parentMasterController, 'stepForward');
            spyOn($scope, 'validate').and.returnValue(true);

            subjectElement.triggerHandler('click');

            expect($scope.validate).toHaveBeenCalledTimes(1);
            expect(parentMasterController.stepForward).toHaveBeenCalledTimes(1);

        });

        it('should not move to next step', () => {

            spyOn(parentMasterController, 'stepForward');
            spyOn($scope, 'validate').and.returnValue(false);

            subjectElement.triggerHandler('click');

            expect($scope.validate).toHaveBeenCalledTimes(1);
            expect(parentMasterController.stepForward).toHaveBeenCalledTimes(0);

        });

    });

});
