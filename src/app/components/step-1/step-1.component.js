class Step1Controller {

    constructor() {
        this.step1 = {};
    }

}

const Step1Component = {
    template: require('./step-1.component.html'),
    controller: Step1Controller,
    controllerAs: 'vm'
};

export default Step1Component;
