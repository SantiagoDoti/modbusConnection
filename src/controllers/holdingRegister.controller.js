let _holdingRegisterService = null;
class HoldingRegisterController {
  constructor({ HoldingRegisterService }) {
    _holdingRegisterService = HoldingRegisterService;
  }

  async get(req, res) {
    const { holdingRegisterId } = req.params;
    const holdingRegister = await _holdingRegisterService.get(holdingRegisterId);
    return res.send(holdingRegister);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const holdingRegisters = await _holdingRegisterService.getAll(pageSize, pageNum);
    return res.send(holdingRegisters);
  }

  async update(req, res) {
    const { body } = req;
    const { holdingRegisterId } = req.params;
    const updatedHoldingRegister = await _holdingRegisterService.update(holdingRegisterId, body);
    return res.send(updatedHoldingRegister);
  }

  async delete(req, res) {
    const { holdingRegisterId } = req.params;
    const deletedHoldingRegister = await _holdingRegisterService.delete(holdingRegisterId);
    return res.send(deletedHoldingRegister);
  }

  async create(req, res){
    const { body } = req;
    const createdHoldingRegister = await _holdingRegisterService.create(body);
    return res.status(201).send(createdHoldingRegister);
}

}

module.exports = HoldingRegisterController;