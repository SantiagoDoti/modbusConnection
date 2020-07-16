const mongoose = require("mongoose");
const { Schema } = mongoose;

const InputRegisterSchema = new Schema({
    address: {type: Number, required: true},
    value: {type: Number, required: true}
});

InputRegisterSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model('inputRegister', InputRegisterSchema);