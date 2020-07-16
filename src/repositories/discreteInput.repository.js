const BaseRepository = require('./base.repository');
let _discreteInput = null;

class DiscreteInputRepository extends BaseRepository{
    constructor({DiscreteInput}){
        super(DiscreteInput);
        _discreteInput = DiscreteInput;
    }
}

module.exports = DiscreteInputRepository;