const modbusRoutes = require("./modbus.routes");

module.exports = {
    HomeRoutes: require("./home.routes"),
    ModbusRoutes: require("./modbus.routes"),
    UserRoutes: require("./user.routes"),
    AuthRoutes: require("./auth.routes"),
    DiscreteInputRoutes: require("./discreteInput.routes"),
    CoilsRoutes: require('./coils.routes'),
    InputRegisterRoutes: require('./inputRegister.routes'),
    HoldingRegisterRoutes: require('./holdingRegister.routes')
}