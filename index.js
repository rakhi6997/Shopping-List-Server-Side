var express=require("express");
var mongoose=require("mongoose");
var bodyparser=require("body-parser");
var cors =require("cors");

var app=express();
const route=require('./route/routes.js');


mongoose.connect("mongodb://localhost:27017/shoppinglist");

mongoose.connection.on('connected',()=>{
    console.log('Connected to Mongodb');


});
mongoose.connection.on('error',(err)=>{

    console.log(err);


});

const PORT =3000;
app.use(cors());

app.use(bodyparser.json());

app.use('/api',route);

app.get('/',(req, res) =>{
    res.send("Roger am here dude");
});


app.listen(PORT,()=>{
    console.log("Server started at port: "+PORT);
});

