const url = "mongodb://localhost:27017/clientVTEX";
const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;
var mongooseModel;
// let clients = [];


mongoose.connect(url, {useNewUrlParser: true});
mongoose.connection.once("open" , () => {console.log("connected")})
mongooseModel = mongoose.model("vtexClientModel" , new mongooseSchema({id: Number , name: String}) , "clientVTEX");
// mongooseModel.find((error , data)=> {
//   data.forEach(function(item , index){
//     clients.push({name: item.name , id: item.id});
//     console.log()
//   })
// })


const addClient = client => {
  var clientModel = new mongooseModel({id:5 , name: client});
  clientModel.save(function(error , client){
    if(error)
      return {status: "error" , description: "could not add client"};
    else
      return {status: "success" , description: client + " added to mongodb"};
  });

  // const nextId = clients.length === 0 ? 1 : clients[clients.length - 1].id + 1;
  // clients = [...clients, { ...client, id: nextId }];
  // return "success";
};

const getClients = () => {
  return mongooseModel.find().exec();
};

module.exports = {
  addClient,
  getClients
};
