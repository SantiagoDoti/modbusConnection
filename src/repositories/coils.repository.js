const BaseRepository = require("./base.repository");
let _coils = null;

class CoilsRepository extends BaseRepository{
    constructor({ Coils }){
        super(Coils);
        _coils = Coils;
    }
}

module.exports = CoilsRepository;