const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

 app.use('/', express.static(path.resolve(__dirname, '../dist')));


    app.get('/', function(req, res){
        const pathToHtmlFile = path.resolve(__dirname,"../dist/index.html");
        const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile,'utf-8');
        res.send(contentFromHtmlFile);
        })


app.listen(3000,function () {
    console.log("the app is running on http://localhost:3000");
})