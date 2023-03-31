const conn = require("../config/db_connection.js");
var promise = require("promise");


class adminModel{

    constructor(req,res){

    }

   async loginCheck(data, callback){
        var email = data.email;
        var password = data.password;
        conn.query("SELECT * from admin where email='"+email+"' AND password='"+password+"'",
        (err, result) => {
            return callback(err, result);
        })
    }

    async addCategoryData(data, callback){
        //console.log(data);
        var type = data.type;
        var name = data.name;
        var image = data.image;
        var description = data.description;
        var sql = "INSERT INTO CATEGORY (category_name, type,image,description,addDate) VALUES ('"+name+"','"+type+"','"+image+"','"+description+"',now())";
        conn.query(sql, (err, result) => {
            //console.log(sql);
            return callback(err, result);
        })
    }

}

module.exports = adminModel