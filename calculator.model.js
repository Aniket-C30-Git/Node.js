const mongoose = require("mongoose");

const calculationschema = mongoose.Schema({
    expression: { type: String, required: true },
    result: { type: String, required: true },
    // timestamps: true
    createdAt: { type: Date, default: Date.now }
})

const calculationmodel = mongoose.model("Calculation",calculationschema);

module.exports = calculationmodel;