const express = require('express');
const router   = express.Router();
const app     = express();
const bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var AuthController = require("../service/AuthController.js");
var CategoryController = require("../service/CategoryController.js");
authObj = new AuthController();
CatObj  = new CategoryController();
const multer  = require('multer');

router.post("/category/add",  multer, async function(req, res, next) {
     CatObj.add(req,res);
  });

router.post('/', authObj.login);
router.post('/login', authObj.login);
//router.post('/category/add', CatObj.add);


module.exports = router;