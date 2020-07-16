const BaseRepository = require("./base.repository");
let _modbus = null;

class ModbusRepository extends BaseRepository{
    constructor({ Modbus }){
        super(Modbus);
        _modbus = Modbus;
    }
}

module.exports = ModbusRepository;