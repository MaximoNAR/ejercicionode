import mysql from "mysql";

//DEV
const pool = mysql.createPool({
  connectionLimit: 10, // Número máximo de conexiones en la pool
  host: "localhost",
  database: "svtest",
  user: "root",
})

export default pool;