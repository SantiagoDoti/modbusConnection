const { Router } = require('express');
const {  AuthMiddleware,  ParseIntMiddleware, CacheMiddleware} = require("../middlewares");
const { CACHE_TME } = require('../helpers');

module.exports = function({HoldingRegisterController}){
    const router = Router();

    router.get("/:holdingRegisterId",HoldingRegisterController.get);
    router.get("",  [AuthMiddleware, ParseIntMiddleware], HoldingRegisterController.getAll);
    router.post("", AuthMiddleware, HoldingRegisterController.create);
    router.patch("/:holdingRegisterId", AuthMiddleware, HoldingRegisterController.update);
    router.delete("/:holdingRegisterId", AuthMiddleware, HoldingRegisterController.delete);

    return router;
};
