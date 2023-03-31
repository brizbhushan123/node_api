const express = require('express');
const app = express();
var promise = require("promise");
const adminModel = require("../model/adminModel.js");
const postData = [];
adminModelObj = new adminModel();

class AuthController extends adminModel{

  login(req,res) {
    var data = req.body;
     adminModelObj.loginCheck(data, function(err,result){
      console.log(data);
        if(result.length){
            return res.status(200).send({
              msg: 'Login Successfully',
              status: true
            });
        }else{
            return res.status(200).send({
                msg: 'Login Failed',
                status: false
            });
        }
    })
 
    
  }

}

module.exports = AuthController;