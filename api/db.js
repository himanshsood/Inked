import mysql from "mysql2";  // Use mysql2 instead of mysql

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "inkedproject",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL Connection Failed:", err);
  } else {
    console.log("MySQL Connected Successfully!");
  }
});
