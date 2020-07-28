const { Router } = require('express');
const { ParseIntMiddleware, AuthMiddleware, CacheMiddleware } = require('../middlewares');
const { CACHE_TME } = require('../helpers');

module.exports = function({DiscreteInputController}){
    const router = Router();

    //  CacheMiddleware(CACHE_TME.ONE_HOUR)
    router.get("/:discreteInputId", AuthMiddleware, DiscreteInputController.get);
    router.get("", [ParseIntMiddleware, AuthMiddleware], DiscreteInputController.getAll);
    router.post("", AuthMiddleware, DiscreteInputController.create);
    router.patch("/:discreteInputId", AuthMiddleware, DiscreteInputController.update);
    router.delete("/:discreteInputId", AuthMiddleware, DiscreteInputController.delete);

    return router;
};
