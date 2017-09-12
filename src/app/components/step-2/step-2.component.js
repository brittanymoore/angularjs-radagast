class Step2Controller {

    constructor() {
        this.step2 = {};
    }

}

const Step2Component = {
    template: require('./step-2.component.html'),
    controller: Step2Controller,
    controllerAs: 'vm'
};

export default Step2Component;
