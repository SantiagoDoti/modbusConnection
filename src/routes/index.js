const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require("express-async-errors");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");

module.exports = function({
        HomeRoutes,
        ModbusRoutes,
        UserRoutes,
        AuthRoutes,
        DiscreteInputRoutes,
        CoilsRoutes,
        InputRegisterRoutes,
        HoldingRegisterRoutes
    }){
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());
        
    apiRoutes.use("/home",HomeRoutes);
    apiRoutes.use("/modbus",ModbusRoutes);
    apiRoutes.use("/user",UserRoutes);
    apiRoutes.use("/discreteInput",DiscreteInputRoutes);
    apiRoutes.use("/inputRegister", InputRegisterRoutes);
    apiRoutes.use("/holdingRegister", HoldingRegisterRoutes);
    apiRoutes.use("/coils", CoilsRoutes);
    apiRoutes.use("/auth",AuthRoutes);

    router.use("/v1/api", apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
}