const COLLECTION_NAME = "clients";

function addClient(handler, client) {
  handler.inserDocument(COLLECTION_NAME, client, function(err, success) {
    console.log("Document added!");
  });
}

function getClients(handler) {
  var result = []; 
  handler.readCollection(COLLECTION_NAME).toArray(function (err, document) {
    result = document
    console.log(document);
  });
  return result;
}

module.exports = {
  addClient,
  getClients
};
