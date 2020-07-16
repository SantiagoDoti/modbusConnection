const mongoose = require("mongoose");
const { Schema } = mongoose;

const CoilsSchema = new Schema({
    address: {type: Number, required: true},
    value: {type: Number, required: true}
});

CoilsSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model('coils', CoilsSchema);