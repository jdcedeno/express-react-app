require("dotenv").config();
const config = require("config");

console.log("%%%%%% custom-environment-variables.json %%%%%%%%%%");
console.log("should be HELLO_WORLD", config.get("TEST"));
console.log("should be 6000", config.get("HEROKUPORT"));

if (process.env.NODE_ENV === "production") {
    console.log("%%%%%% production.json %%%%%%%%%%");
    console.log("should be PRODUCTION VALUE", config.get("defaultTest"));
    console.log("should be 6000 (from .env)", config.get("HEROKUPORT"));
    console.log("Should be MONGO_URI");
} else {
    console.log("%%%%%% default.json %%%%%%%%%%");
    console.log("should be DEFAULT VALUE", config.get("defaultTest"));
    console.log("should be 7000", config.get("localPort"));
}
