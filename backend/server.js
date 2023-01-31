const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();

app.use(bodyParser.json());

db.pool.query(
  "CREATE TABLE lists (id INTEGER AUTO_INCREMENT, value Text, PRIMARY KEY (id))",
  (err, results, fields) => {
    console.log("results", results);
  }
);

app.get("/api/values", function (req, res) {
  db.pool.query("SELECT * FROM lists;", (err, result, fields) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.json(result);
    }
  });
});

app.post("/api/value", function (req, res) {
  db.pool.query(
    `INSERT INTO lists (value) VALUES ("${req.body.value}")`,
    (err, result, fields) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.json({ success: true, value: req.body.value });
      }
    }
  );
});

app.get('/api/hi', function (req, res) {
    //데이테베이스에서 모든 정보 가져오기 
   res.status(200).send('good')
})

app.listen(5000, () => {
  console.log("application listening on port 5000");
});
