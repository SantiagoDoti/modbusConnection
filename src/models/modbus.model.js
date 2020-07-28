const mongoose = require('mongoose');
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const ModbusSchema = new Schema({
    discreteInput: { 
        type: Schema.Types.ObjectId,
        ref: "discreteInput",
        required: true,
        autopopulate: true
    },
    coils: {
        type: Schema.Types.ObjectId,
        ref: "coils",
        required: true,
        autopopulate: true
    },
    inputRegister:{
        type: Schema.Types.ObjectId,
        ref: "inputRegister",
        required: true,
        autopopulate: true
    },
    holdingRegister:{
        type: Schema.Types.ObjectId,
        ref: "holdingRegister",
        required: true,
        autopopulate: true
    }
});

module.exports = mongoose.model("modbus", ModbusSchema);