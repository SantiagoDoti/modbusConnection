const BaseService = require('./base.service')
let _discreteInputRepository = null;

class DiscreteInputService extends BaseService{
    constructor({DiscreteInputRepository}){
        super(DiscreteInputRepository);
        _discreteInputRepository = DiscreteInputRepository;
    }
}

module.exports = DiscreteInputService;