let csvToJson = require("convert-csv-to-json");
const fs = require("fs");

module.exports = (file, name) => {
  let json = csvToJson.fieldDelimiter(",").getJsonFromCsv(file);

  json.forEach((j) => console.log(j));
  json = JSON.stringify(json);
  fs.writeFile(`../react-site/src/assets/db/${name}.json`, json, (err) => {
    if (err) console.log("error: ", err);
  });
};
