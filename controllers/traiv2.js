const { errorHandler } = require("../utils");

exports.traiv2 = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/trai.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"Kz Khánhh","url":`${link}`});
};