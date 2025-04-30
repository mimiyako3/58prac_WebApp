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
app.post("/addLikePost", (req, res) => {
    const postId = req.body.id;
    const name = req.body.name;

    // まず、その人が既に「いいね」しているか確認
    const checkQuery = "SELECT * FROM allLikePosts WHERE post_id = ? AND name = ?";

    connection.query(checkQuery, [postId, name], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "いいね確認中にエラーが発生しました" });
        }

        const liked = results.length > 0;

        if (!liked) {
            // まだ「いいね」していなければ追加
            const insertQuery = "INSERT INTO allLikePosts (post_id, name) VALUES (?, ?)";
            connection.query(insertQuery, [postId, name], (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "いいねの追加に失敗しました" });
                }
                return res.status(200).json({ message: "いいねを追加しました" });
            });
        } else {
            // 既に「いいね」していれば削除
            const deleteQuery = "DELETE FROM allLikePosts WHERE post_id = ? AND name = ?";
            connection.query(deleteQuery, [postId, name], (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "いいねの削除に失敗しました" });
                }
                return res.status(200).json({ message: "いいねを取り消しました" });
            });
        }
    });
});

//ユーザーのいいね一覧の取得
app.post("/allLikePosts",(req,res)=>{
    const userName = req.body.name;
    const query = "SELECT * FROM allLikePosts WHERE userName = ?";
    connection.query(query,[userName] ,(err, result)=>{
        if(err){
            console.log(err);
            res.status(500).send("Error retrieving data from database");
        }else{
            res.status(200).json(result);
            console.log(result);
        }
    });

});



//サーバーの起動
app.listen(PORT,(req,res)=>{
    console.log("surver running!");
});

