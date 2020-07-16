const BaseService = require('./base.service');
let _coilsRepository = null;

class CoilsService extends BaseService{
    constructor({CoilsRepository}){
        super(CoilsRepository);
        _coilsRepository = CoilsRepository;
    }
}

module.exports = CoilsService;