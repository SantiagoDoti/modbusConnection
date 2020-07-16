const BaseService = require('./base.service')
let _holdingRegisterRepository = null;

class HoldingRegisterService extends BaseService{
    constructor({HoldingRegisterRepository}){
        super(HoldingRegisterRepository);
        _holdingRegisterRepository = HoldingRegisterRepository;
    }
}

module.exports = HoldingRegisterService;