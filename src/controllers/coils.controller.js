let _coilsService = null;
class CoilsController {
  constructor({ CoilsService }) {
    _coilsService = CoilsService;
  }

  async get(req, res) {
    const { coilsId } = req.params;
    const coils = await _coilsService.get(coilsId);
    return res.send(coils);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const coils = await _coilsService.getAll(pageSize, pageNum);
    return res.send(coils);
  }

  async update(req, res) {
    const { body } = req;
    const { coilsId } = req.params;
    const updatedCoils = await _coilsService.update(coilsId, body);
    return res.send(updatedCoils);
  }

  async delete(req, res) {
    const { coilsId } = req.params;
    const deletedCoils = await _coilsService.delete(coilsId);
    return res.send(deletedCoils);
  }

  async create(req, res){
    const { body } = req;
    const createdCoils = await _coilsService.create(body);
    return res.status(201).send(createdCoils);
}

}

module.exports = CoilsController;