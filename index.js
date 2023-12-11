const app = require('express')();
require('dotenv').config();

const port = process.env.PORT;
app.listen(
    port,
    () => console.log(`Server running on http://localhost:${port}`)
)

app.get("/auctionNfts", function (request, result) {

    const sample = {}
    res.send(sample);
});

app.get('/fixedPriceNfts', async function(req, res, next){
    const sample = {}
    res.send(sample);
});

app.post("/creatNFT", function (request, result) {
    
    const sample = {}
    res.send(sample);
});

app.post('/createAuction', async function(req, res, next){
    const sample = {}
    res.send(sample);
});

app.get('/getAuctionEndTime', async function(req, res, next){
    const sample = {}
    res.send(sample);
});

app.get('/bidders', async function(req, res, next){
    const sample = {}
    res.send(sample);
});

app.patch('/startAuction', async function(req, res, next){
    const sample = {}
    res.send(sample);
});

app.post('/endAuction', async function(req, res, next){
    const sample = {}
    res.send(sample);
});

app.get('/withdrawCollateral', async function(req, res, next){
    const sample = {}
    res.send(sample);
});