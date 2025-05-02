const express = require("express");
const app = express();
// const mysql = require("mysql2");
const mysql = require('mysql2/promise');
const dotenv = require("dotenv").config();
const cors = require("cors");
const PORT = 8000;
let connection;

// corsを使うと、クロスオリジンのエラーが出なくなる
app.use(cors());

//JSONの受け取り
app.use(express.json());

//MySQLとの繋ぎ合わせ
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// });

async function connectToDatabase() {
    try {
        connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST || 'mysql',
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        });
        console.log('MySQL connected!');
    } catch (err) {
        console.error('MySQL connection failed:', err);
    }
}

connectToDatabase();



const allPosts_prac = [
    { postUserName: "田中", postContent: "3つのタスクを完了" },
    { postUserName: "鈴木", postContent: "タスクを全て完了" },
    { postUserName: "佐藤", postContent: "5つのタスクを完了" },
    { postUserName: "佐々木", postContent: "つのタスクを完了" },
    { postUserName: "篠崎", postContent: "10つのタスクを完了" },
    { postUserName: "加藤", postContent: "9つのタスクを完了" },
    { postUserName: "園田", postContent: "おはよう" },
    { postUserName: "あかり", postContent: "課題...." },
    { postUserName: "はるか", postContent: "タスク終わり！" },
    { postUserName: "あやか", postContent: "課題出し忘れた" },
    { postUserName: "たける", postContent: "ねむたい" },
  ];
  
//デバック用
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);


//繋がってるかのチェック
// connection.connect((err) => {
//     if (err) {
//       console.log("エラー:"+ err);
//       return;
//     }
//     console.log('success!');
//   });

// 練習用API
app.get("/allPosts_prac", (req, res) => {
    try {
      res.status(200).json(allPosts_prac);
      console.log(allPosts_prac);
    } catch (err) {
      console.error("エラー:", err);
      res.status(500).send({ err: "投稿の取得に失敗しました。" });
    }
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

