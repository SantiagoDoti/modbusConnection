const BaseRepository = require('./base.repository');
let _inputRegister = null;

class InputRegisterRepository extends BaseRepository{
    constructor({InputRegister}){
        super(InputRegister);
        _inputRegister = InputRegister;
    }
}

module.exports = InputRegisterRepository;