const BaseService = require('./base.service')
let _modbusRepository = null;

class ModbusService extends BaseService{
    constructor({ModbusRepository}){
        super(ModbusRepository);
        _modbusRepository = ModbusRepository;
    }
}

module.exports = ModbusService;