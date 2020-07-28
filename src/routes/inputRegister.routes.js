const { Router } = require('express');
const { ParseIntMiddleware, AuthMiddleware, CacheMiddleware } = require('../middlewares');
const { CACHE_TME } = require('../helpers');

module.exports = function({InputRegisterController}){
    const router = Router();
    
    //  CacheMiddleware(CACHE_TME.ONE_HOUR)
    router.get("/:inputRegisterId", AuthMiddleware,InputRegisterController.get);
    router.get("", [AuthMiddleware, ParseIntMiddleware], InputRegisterController.getAll);
    router.post("", AuthMiddleware, InputRegisterController.create);
    router.patch("/:inputRegisterId", AuthMiddleware, InputRegisterController.update);
    router.delete("/:inputRegisterId", AuthMiddleware, InputRegisterController.delete);

    return router;
};
