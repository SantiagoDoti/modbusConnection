let _modbusService = null;
class ModbusController{
    constructor({ModbusService}){
        _modbusService = ModbusService;
    }

    async create(req, res){
        const { body } = req;
        const createdModbus = await _modbusService.create(body);
        console.log(body);
        return res.status(201).send(createdModbus);
    }

    async get(req, res){
        const {modbusId} = req.params;
        const modbus = await _modbusService.get(modbusId);
        return res.send(modbus);
    }

    async getAll(req, res){
        const { pageSize, pageNum } = req.query;
        const modbusAll = await _modbusService.getAll(pageSize, pageNum);
        return res.send(modbusAll);
    }

    async update(req, res){
        const {body} = req;
        const {modbusId} = req.params;
        const updatedModbus = await _modbusService.update(modbusId,body);
        return res.send(updatedModbus);
    }

    async delete(req,res){
        const { modbusId } = req.params;
        const deletedModbus = await _modbusService.delete(modbusId);
        return res.send(deletedModbus);
    }

}

module.exports = ModbusController;