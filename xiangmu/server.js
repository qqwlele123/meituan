var express = require('express');
var app = express();


app.get("*", function(req, res){
    res.sendFile(__dirname + req.path)
})

app.listen(8888, function(){
   console.log('服务器启动成功！');
})
