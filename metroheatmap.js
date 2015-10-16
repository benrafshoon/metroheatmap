"use strict";

var csv = require("csv");
var fs = require("fs");

function parseFile(filename, callback) {
  var fileStream = fs.createReadStream(__dirname + "/transitdata/google_daily_transit/" + filename + ".txt");
  var parser = csv.parse({
    columns: true
  }, callback);
  fileStream.pipe(parser);
}

parseFile("agency", function(error, data) {
  console.log(data);
});