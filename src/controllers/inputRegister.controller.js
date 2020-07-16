let _inputRegisterService = null;
class InputRegisterController {
  constructor({ InputRegisterService }) {
    _inputRegisterService = InputRegisterService;
  }

  async get(req, res) {
    const { inputRegisterId } = req.params;
    const inputRegister = await _inputRegisterService.get(inputRegisterId);
    return res.send(inputRegister);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const inputRegister = await _inputRegisterService.getAll(pageSize, pageNum);
    return res.send(inputRegister);
  }

  async update(req, res) {
    const { body } = req;
    const { inputRegisterId } = req.params;
    const updatedInputRegister = await _inputRegisterService.update(inputRegisterId, body);
    return res.send(updatedInputRegister);
  }

  async delete(req, res) {
    const { inputRegisterId } = req.params;
    const deletedInputRegister = await _inputRegisterService.delete(inputRegisterId);
    return res.send(deletedInputRegister);
  }

  async create(req, res){
    const { body } = req;
    const cratedInputRegister = await _inputRegisterService.create(body);
    return res.status(201).send(cratedInputRegister);
  }

}

module.exports = InputRegisterController;