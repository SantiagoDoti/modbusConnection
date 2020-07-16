const ModbusController = require("./modbus.controller");

module.exports = {
    HomeController: require("./home.controller"),
    UserController: require('./user.controller'),
    ModbusController: require("./modbus.controller"),
    AuthController: require('./auth.controller'),
    DiscreteInputController: require('./discreteInput.controller'),
    CoilsController: require('./coils.controller'),
    InputRegisterController: require('./inputRegister.controller'),
    HoldingRegisterController: require('./holdingRegister.controller')
}