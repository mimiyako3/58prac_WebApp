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

//MySQLとの繋ぎ合わせ
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

//デバック用
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);


//繋がってるかのチェック
connection.connect((err) => {
    if (err) {
      console.log("エラー:"+ err);
      return;
    }
    console.log('success!');
  });


//投稿を受け取ってDBに追加する 
app.post("/sendPost",(req,res)=>{
    console.log(req.body);
    const addPostUserName = req.body.name;
    const addPostContent = req.body.post;
    const query = "INSERT INTO allPosts(postUserName, postContent) VALUES(?,?)";
    connection.query(query,[addPostUserName, addPostContent],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send({err:"投稿できませんでした"});
        }else{
            res.status(200).json({message:"投稿しました！"});
            console.log(result);
        }
    })
});


//全ての投稿を返す
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

//いいねを押した際のにDBに追加・削除
app.post("/addLikePost",(req,res)=>{
    console.log(req.body);
    const postId = req.body.id;
    const name = req.body.name;
    const query = "SELECT 1 FROM allLikePosts WEHERE allLikePsosts.postId = postId AND allLikePosts.userName = name";
    const first_query = "SELECT allLikePosts.*, EXISTS ( ? ) AS likes FROM allPosts";
    const second_query = "INSERT INTO allLikePosts(post_id, name) VALUES(?,?)";
    connection.query(first_query,[query],(err,result)=>{
        if(err){
            console.log(err);
            res.sendStatus(500).send({err:"いいねの判定ができませんでした"});
        }else{
            // res.status(200).json({message:"いいねの判定に成功しました"});
            console.log(result);

        };
    });

    if(liked == false){
        connection.query(second_query,[postId, name],(err,result)=>{
            if(err){
                console.log(err);
                res.status(500).send({err:"いいねリストに追加できませんでした"});
            }else{
                res.status(200).json({message:"いいねリストに追加できました！"});
                console.log(result);
            }
        });
    }else{
        connection.query("DELETE FROM allLikePosts WHERE postId = postId AND name = name; ",(err,result)=>{
            if(err){
                console.log(err);
            }else{
                console.log("sucsess!");
                res.status(200).json({message:"いいねの処理が成功しました"});
            }
        })

    }

});

// //いいね一覧の取得
// app.get("/allLikePosts",(req,res)=>{
//     connection.query("SELECT * FROM allLikePosts", (err, result)=>{
//         if(err){
//             console.log(err);
//             res.status(500).send({err:"いいねリストに追加できませんでした"});
//         }else{
//             res.status(200).json(result);
//             console.log(result);
//         }
//     });

// });



//サーバーの起動
app.listen(PORT,(req,res)=>{
    console.log("surver running!");
});

