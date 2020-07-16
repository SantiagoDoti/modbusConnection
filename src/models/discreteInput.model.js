const mongoose = require("mongoose");
const { Schema } = mongoose;

const DiscreteInputSchema = new Schema({
    address: {type: Number, required: true},
    value: {type: Number, required: true}
});

DiscreteInputSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("discreteInput", DiscreteInputSchema);