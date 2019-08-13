const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/middlewareDB" , {useNewUrlParser : true});
mongoose.connection.once("open" , () => console.log("Connected to middlewareDB"));

var productModel = mongoose.model("productModel" , new mongooseSchema({name: String , sku: Number , price: Number}) , "products");
var clientModel = mongoose.model("clientModel" , new mongooseSchema({name: String , age: Number}) , "clients");

module.exports = {
    productModel,
    clientModel
}