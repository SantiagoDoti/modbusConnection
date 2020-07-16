const BaseRepository = require("./base.repository");
let _holdingRegister = null;

class HoldingRegisterRepository extends BaseRepository {
  constructor({ HoldingRegister }) {
    super(HoldingRegister);
    _holdingRegister = HoldingRegister;
  }

}

module.exports = HoldingRegisterRepository;