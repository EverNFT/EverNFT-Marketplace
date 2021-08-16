var express = require('express');
var router = express.Router();
var DB = require('./nftsDB');

/* GET home page. */
router.get('/',async function(req, res, next) {
try{
   let data = await DB.getNftsData()
res.json(data);
}catch(e){console.log(e)}

});

router.get('/:id',async function(req, res, next) {
   let nftId = req.params.id;
   try{
    let data = await DB.getNftData(nftId)
    res.json(data);
 }catch(e){console.log(e)}
});

router.post('/save',async function(req, res, next) {
    let nft = req.body;
    console.log(JSON.stringify(nft))
    try{
     await DB.insertNftsData(nft)
  }catch(e){console.log(e)}
 });

module.exports = router;
