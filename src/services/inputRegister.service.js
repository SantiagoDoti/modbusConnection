const BaseService = require('./base.service')
let _inputRegisterRepository = null;

class InputRegisterService extends BaseService{
    constructor({InputRegisterRepository}){
        super(InputRegisterRepository);
        _inputRegisterRepository = InputRegisterRepository;
    }
}

module.exports = InputRegisterService;