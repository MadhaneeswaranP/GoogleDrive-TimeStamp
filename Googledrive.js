const fs = require("fs");

var d;

fs.readdir("./", function (err, data) {
  if (err) throw err;
  console.log(data);
  d = data;
});

var path = require("path");

const express = require("express");

const app = express();

app.listen(8080, function () {
  console.log("Webserver running");
});

app.get("/", function (req, res) {
  res.json({ list: d });
});

app.get("/googledrive", function (req, res) {
  let finalHTML =
    "<div style='display: grid;grid-template-columns: auto auto auto auto;grid-gap: 10px;background-color: #e6e5e3;padding: 10px;'>";

  d.forEach(function (item) {
    finalHTML += ` <div style='border-radius:10px;background-color:#b3b35f;
        text-align: center;
        '><img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Docs-icon.png" alt="Avatar" style="width:200px">
        <div style='padding: 2px 5px; background-color:white'>
        <p> ${item} </p>
        </div></div>`;
  });
  finalHTML += "</div>";
  res.send(finalHTML);
});
