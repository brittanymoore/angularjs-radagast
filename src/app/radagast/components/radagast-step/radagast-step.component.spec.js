import RadagastModule from './../../radagast.module';

class RadagastMasterMock {
    addStep() {}
}

describe('RadagastStepComponent', () => {

    beforeEach(() => {
        angular.mock.module(RadagastModule);
    });

    let subjectElement;
    let subjectController;
    let parentController;
    let $scope;

    beforeEach(() => {
        angular.mock.inject(($componentController, $compile, $rootScope) => {

            $scope = $rootScope.$new();
            parentController = new RadagastMasterMock();

            subjectElement = angular.element(`<rad-wizard-step></rad-wizard-step>`);
            subjectElement.data('$radWizardController', parentController);

            $compile(subjectElement)($scope);
            $scope.$digest();

            subjectController = subjectElement.controller('radWizardStep');

        });
    });

    it('should create component', () => {
        expect(subjectController).toBeTruthy();
        expect(subjectElement).toBeTruthy();
    });

    it('should add step on init', () => {

        spyOn(parentController, 'addStep');
        subjectController.name = 'test';
        subjectController.order = 1;

        subjectController.$onInit();

        expect(parentController.addStep).toHaveBeenCalledTimes(1);
        expect(parentController.addStep).toHaveBeenCalledWith(subjectController.name, subjectController.order);

    });

    it('should display or hide based on active step', () => {

        subjectController.order = 1;
        subjectController.$onInit();
        $scope.$digest();

        let element = angular.element(subjectElement[0].querySelector('.wizard-step'));
        expect(element.hasClass('ng-hide')).toBeTruthy();

        subjectController.activeStep = 1;
        $scope.$digest();

        element = angular.element(subjectElement[0].querySelector('.wizard-step'));
        expect(element.hasClass('ng-hide')).toBeFalsy();

    });

});
