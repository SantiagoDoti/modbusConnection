const mongoose = require("mongoose");
const { Schema } = mongoose;

const HoldingRegisterSchema = new Schema({
    address: {type: Number, required: true},
    value: {type: Number, required: true}
});

HoldingRegisterSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model('holdingRegister', HoldingRegisterSchema);