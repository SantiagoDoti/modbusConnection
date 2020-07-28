const { Router } = require('express');
const { ParseIntMiddleware, AuthMiddleware, CacheMiddleware } = require('../middlewares');
const { CACHE_TME } = require('../helpers');

module.exports = function({CoilsController}){
    const router = Router();

    router.get("/:coilsId", AuthMiddleware, CoilsController.get);
    router.get("", [AuthMiddleware, ParseIntMiddleware], CoilsController.getAll);
    router.post("", AuthMiddleware, CoilsController.create);
    router.patch("/:coilsId", AuthMiddleware, CoilsController.update);
    router.delete("/:coilsId", AuthMiddleware, CoilsController.delete);

    return router;
};