const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("perpustakaan");
  dbo.collection("databuku").findOne({}, function (err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});
