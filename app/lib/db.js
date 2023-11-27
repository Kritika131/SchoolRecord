import mysql from "mysql2/promise";
 

export async function query({query,values = []}){
  // create the connection to database
  const dbconnection = await mysql.createConnection({
    host: 'localhost',
    database: 'nextproducts',
    user: 'root',
    password:''
});
// console.log("connection ", dbconnection);

 try {
  const [results] = await dbconnection.execute(query,values);
  // console.log("results ",results);
  return results;  //---
  dbconnection.end();

 } catch (err){
  throw Error(err.message);
  return {err}; 
 }

}