import RadagastModule from './../../radagast.module';

describe('RadagastMasterComponent', () => {

    beforeEach(() => {
        angular.mock.module(RadagastModule);
    });

    let subjectElement;
    let subjectController;
    let $scope;
    let $timeout;

    beforeEach(() => {
        angular.mock.inject(($componentController, $compile, $rootScope, _$timeout_) => {

            $scope = $rootScope.$new();
            $timeout = _$timeout_;

            // get controller
            subjectController = $componentController('radWizard', {
                $scope: $scope,
                $timeout: $timeout
            });

            // get element
            subjectElement = angular.element(`<rad-wizard></rad-wizard>`);
            $compile(subjectElement)($scope);

        });
    });

    it('should create component', () => {
        expect(subjectController).toBeTruthy();
        expect(subjectElement).toBeTruthy();
    });

    it('should add a step', () => {

        subjectController.addStep('test', 1);

        expect(subjectController.steps).toBeDefined();
        expect(subjectController.steps.length).toBe(1);

    });

    it('should allow subcribers to move step', () => {

        const $subScope = $scope.$new();
        let moveIndex = null;
        subjectController.subscribeToMoveStep($subScope, (event, index) => {
            moveIndex = index;
        });

        subjectController.publishMoveStep(1);
        $timeout.flush();

        expect(moveIndex).toBe(1);

    });

    it('should broadcast move step event', () => {

        let ticks = 0;
        let moveIndex = null;
        $scope.$on(subjectController.MOVE_STEP_MESSAGE, (event, index) => {
            ticks++;
            moveIndex = index;
        });

        subjectController.publishMoveStep(3);

        expect(ticks).toBe(1);
        expect(moveIndex).toBe(3);

    });

});
