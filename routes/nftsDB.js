const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
var dbo;

module.exports = {

  insertNftsData: function (nfts, callback) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
      if (err) throw err;
      dbo = client.db("NFT_DB");
      dbo.collection("nfts").insertOne(nfts, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        client.close();
      });
    })
  },
  getNftsData: async function () {

    let client = await MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    var dbo = client.db("NFT_DB");
    let collection = dbo.collection("nfts");
    let res = await collection.find({}).toArray();
    console.log(res);
    return res;
  }
  ,
  getNftData: async function (id) {
    let client = await MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    var dbo = client.db("NFT_DB");
    let collection = dbo.collection("nfts");
    let res = await collection.findOne({ info: { $elemMatch: { nftID: id } } });
    console.log(res);
    return res;
  },
  updateNftData: async function (id) {
    let client = await MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    var dbo = client.db("NFT_DB");
    let collection = dbo.collection("nfts");
    var myquery = { info: { $elemMatch: { nftID: id } } };
    var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
    collection.updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
    return res;
  }
}