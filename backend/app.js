const express = require("express");
const app = express();
const mysql = require("mysql2");
const dotenv = require("dotenv").config();
const cors = require("cors");
const PORT = 8000;

// corsを使うと、クロスオリジンのエラーが出なくなる
app.use(cors());

//JSONの受け取り
app.use(express.json());


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);



connection.connect((err) => {
    if (err) {
      console.log("エラー:"+ err);
      return;
    }
    console.log('success!');
  });



  
app.post("/sendPost",(req,res)=>{
    console.log(req.body);
    const addName = req.body.name;
    const addPost = req.body.post;
    const query = "INSERT INTO allPosts(name, post) VALUES(?,?)";
    connection.query(query,[addName, addPost],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send({err:"投稿できませんでした"});
        }else{
            res.status(200).json({message:"投稿しました！"});
            console.log(result);
        }
    })
});



app.get("/allPosts",(req,res)=>{
    connection.query("SELECT * FROM allPosts", (err, result)=>{
        if(err){
            console.log(err);
            res.status(500).send("Error retrieving data from database");
        }else{
            res.status(200).json(result);
            console.log(result);
        }
       

    });

});

app.listen(PORT,(req,res)=>{
    console.log("surver running!");
});

