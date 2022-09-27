const fetch = require("node-fetch");
const fs = require("fs");
const makeJson = require("./makeJson");

const MAIN_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbtgf0y6rmYI-lg4tCbelwoK0IshswVbW_F519K6xXpk-HYJo71c3ShxoQcZ-5B8fZHDhF9_h_AtwA/pub?output=csv";

const sheets = [
  { id: 0, name: "Projects" },
  { id: 1872270793, name: "Scrum" },
];

sheets.forEach((sheet) => {
  const path = `resources/lib/${sheet.name}.csv`;
  console.log("fetching ", sheet.name);
  fetch(MAIN_URL + "&gid=" + sheet.id)
    .then((res) => res.buffer())
    .then((result) =>
      fs.writeFile(path, result, (err) => {
        if (err) console.log(err);
      }),
    )
    .then(makeJson(path, sheet.name));
});
