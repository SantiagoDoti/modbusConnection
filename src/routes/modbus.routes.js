const { Router } = require('express');
const {  AuthMiddleware,  ParseIntMiddleware, CacheMiddleware} = require("../middlewares");
const { CACHE_TME } = require('../helpers');

module.exports = function({ModbusController}){
    const router = Router();

    router.get("/:modbusId", ModbusController.get);
    router.get("", [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CACHE_TME.ONE_HOUR)], ModbusController.getAll);
    router.post("", ModbusController.create);
    router.patch("/:modbusId", ModbusController.update);
    router.delete("/:modbusId", ModbusController.delete);

    return router;
};