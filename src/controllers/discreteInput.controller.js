let _discreteInputService = null;
class DiscreteInputController{
    constructor({DiscreteInputService}){
        _discreteInputService = DiscreteInputService;
    }

    async create(req, res){
        const {body} = req;
        const createdDiscreteInput = await _discreteInputService.create(body);
        return res.status(201).send(createdDiscreteInput);
    }

    async get(req, res){
        const {discreteInputId} = req.params;
        const discreteInput = await _discreteInputService.get(discreteInputId);
        return res.send(discreteInput);
    }

    async getAll(req, res){
        const {pageSize, pageNum} = req.query;
        const discreteInputAll = await _discreteInputService.getAll(pageSize, pageNum);
        return res.send(discreteInputAll);
    }

    async update(req, res){
        const {body} = req;
        const {discreteInputId} = req.params;
        const updatedDiscreteInput = await _discreteInputService.update(discreteInputId,body);
        return res.send(updatedDiscreteInput);
    }

    async delete(req,res){
        const {discreteInputId} = req.params;
        const deletedDiscreteInput = await _discreteInputService.delete(discreteInputId);
        return res.send(deletedDiscreteInput);
    }
}

module.exports = DiscreteInputController;

