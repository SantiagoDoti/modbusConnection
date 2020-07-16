const { Router } = require('express');
const { ParseIntMiddleware, AuthMiddleware, CacheMiddleware } = require('../middlewares');
const { CACHE_TME } = require('../helpers');

module.exports = function({CoilsController}){
    const router = Router();

    router.get("/:coilsId", CoilsController.get);
    router.get("", [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CACHE_TME.ONE_HOUR)], CoilsController.getAll);
    router.post("", AuthMiddleware, CoilsController.create);
    router.patch("/:coilsId", AuthMiddleware, CoilsController.update);
    router.delete("/:coilsId", AuthMiddleware, CoilsController.delete);

    return router;
};