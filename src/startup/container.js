const { createContainer, asClass, asValue, asFunction } = require('awilix');

// config
const config = require('../config');
const app = require('.');

// services
const { HomeService, ModbusService, AuthService, UserService, DiscreteInputService, CoilsService, InputRegisterService, HoldingRegisterService } = require('../services');

// controllers
const { HomeController, ModbusController, AuthController, UserController, DiscreteInputController, CoilsController, InputRegisterController, HoldingRegisterController } = require("../controllers");

// routes
const { HomeRoutes, ModbusRoutes, UserRoutes, AuthRoutes, DiscreteInputRoutes, CoilsRoutes, InputRegisterRoutes, HoldingRegisterRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

// models
const {Coils, DiscreteInput, HoldingRegister, InputRegister, Modbus, User} = require('../models');

// repositories
const {ModbusRepository, UserRepository, DiscreteInputRepository, CoilsRepository, InputRegisterRepository, HoldingRegisterRepository} = require('../repositories');

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        ModbusService: asClass(ModbusService).singleton(),
        AuthService: asClass(AuthService).singleton(),
        UserService: asClass(UserService).singleton(),
        DiscreteInputService: asClass(DiscreteInputService).singleton(),
        CoilsService: asClass(CoilsService).singleton(),
        InputRegisterService: asClass(InputRegisterService).singleton(),
        HoldingRegisterService: asClass(HoldingRegisterService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        ModbusController: asClass(ModbusController.bind(ModbusController)).singleton(),
        AuthController: asClass(AuthController.bind(AuthController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        DiscreteInputController: asClass(DiscreteInputController.bind(DiscreteInputController)).singleton(),
        CoilsController: asClass(CoilsController.bind(CoilsController)).singleton(),
        InputRegisterController: asClass(InputRegisterController.bind(InputRegisterController)).singleton(),
        HoldingRegisterController: asClass(HoldingRegisterController.bind(HoldingRegisterController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        ModbusRoutes: asFunction(ModbusRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
        AuthRoutes: asFunction(AuthRoutes).singleton(),
        DiscreteInputRoutes: asFunction(DiscreteInputRoutes).singleton(),
        CoilsRoutes: asFunction(CoilsRoutes).singleton(),
        InputRegisterRoutes: asFunction(InputRegisterRoutes).singleton(),
        HoldingRegisterRoutes: asFunction(HoldingRegisterRoutes).singleton()
    })
    .register({
        Coils: asValue(Coils),
        DiscreteInput: asValue(DiscreteInput),
        HoldingRegister: asValue(HoldingRegister),
        InputRegister: asValue(InputRegister),
        Modbus: asValue(Modbus),
        User: asValue(User)
    }).register({
        ModbusRepository: asClass(ModbusRepository).singleton(),
        UserRepository: asClass(UserRepository).singleton(),
        DiscreteInputRepository: asClass(DiscreteInputRepository).singleton(),
        CoilsRepository: asClass(CoilsRepository).singleton(),
        InputRegisterRepository: asClass(InputRegisterRepository).singleton(),
        HoldingRegisterRepository: asClass(HoldingRegisterRepository).singleton()
    });

module.exports = container;