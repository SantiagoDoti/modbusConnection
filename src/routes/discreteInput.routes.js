const { Router } = require('express');
const { ParseIntMiddleware, AuthMiddleware } = require('../middlewares');

module.exports = function({DiscreteInputController}){
    const router = Router();

    router.get("/:discreteInputId",DiscreteInputController.get);
    router.get("", ParseIntMiddleware, DiscreteInputController.getAll);
    router.post("", AuthMiddleware, DiscreteInputController.create);
    router.patch("/:discreteInputId", AuthMiddleware, DiscreteInputController.update);
    router.delete("/:discreteInputId", AuthMiddleware, DiscreteInputController.delete);

    return router;
};
