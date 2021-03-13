require("dotenv").config();
const config = require("config");

console.log("%%%%%% custom-environment-variables.json %%%%%%%%%%");
console.log("should be DEFAULT VALUE", config.get("TEST"));
console.log("should be 5000", config.get("HEROKUPORT"));

console.log("%%%%%% default.json %%%%%%%%%%");
console.log("should be DEFAULT VALUE", config.get("defaultTest"));
console.log("should be 6000", config.get("localPort"));

console.log("%%%%%% production.json %%%%%%%%%%");
console.log("should be PRODUCTION VALUE", config.get("defaultTest"));
console.log("should be 5000 (from .env)", config.get("HEROKUPORT"));
