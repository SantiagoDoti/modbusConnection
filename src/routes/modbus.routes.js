const { Router } = require('express');
const {  AuthMiddleware,  ParseIntMiddleware, CacheMiddleware} = require("../middlewares");
const { CACHE_TME } = require('../helpers');

module.exports = function({ModbusController}){
    const router = Router();


    // CacheMiddleware(CACHE_TME.ONE_HOUR)
    router.get("/:modbusId", AuthMiddleware, ModbusController.get);
    router.get("", [AuthMiddleware, ParseIntMiddleware], ModbusController.getAll);
    router.post("", AuthMiddleware, ModbusController.create);
    router.patch("/:modbusId", AuthMiddleware, ModbusController.update);
    router.delete("/:modbusId", AuthMiddleware, ModbusController.delete);

    return router;
};