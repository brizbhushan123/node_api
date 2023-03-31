const express = require('express');
const app = express();
var promise = require("promise");
var formidable = require('formidable');
const adminModel = require("../model/adminModel.js");
const multer  = require('multer');
const postData = [];
adminModelObj = new adminModel();


class CategoryController extends adminModel{

  async add(req,res) {
    console.log(req);
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
          cb(null, 'uploads');
      },
      filename: function (req, file, cb) {
          cb(null, Date.now() + '-' + file.originalname);
      }
    });
    var upload = multer({ storage: storage });
    upload.single('file');
    console.log(req.file);
    var data = JSON.parse(JSON.stringify(req.body));
    data.fileName = req.file.filename;
    console.log(data);
     adminModelObj.addCategoryData(data, function(err,result){
      //console.log(JSON.parse(JSON.stringify(req.body)));
        if(result){
            return res.status(200).send({
              msg: 'Successfully Inserted Category',
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

module.exports = CategoryController;