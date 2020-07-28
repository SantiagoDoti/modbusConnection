const { Router } = require("express");
const {  AuthMiddleware,  ParseIntMiddleware, CacheMiddleware} = require("../middlewares");
const { CACHE_TME } = require('../helpers');

module.exports = function({ UserController }) {
  const router = Router();

  // CacheMiddleware(CACHE_TME.ONE_HOUR)
  router.get("", [AuthMiddleware, ParseIntMiddleware], UserController.getAll);
  router.get("/:userId", UserController.get);
  router.patch("/:userId", AuthMiddleware, UserController.update);
  router.delete("/:userId", AuthMiddleware, UserController.delete);

  return router;
};