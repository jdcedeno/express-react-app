require("dotenv").config();
const config = require("config");
const helmet = require("helmet");
const express = require("express");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    app.send(process.env.NODE_ENV);
    let herokuport = config.get("HEROKUPORT"); // custom-environment-variables
    let localPort = config.get("localPort"); // default.js (production) config
    if (process.env.NODE_ENV === "development") {
        let result = {
            HEROKUPORT: herokuport,
            localPort,
        };
        res.status(200).send(result);
    } else {
        let result = {
            HEROKUPORT: herokuport,
        };
        res.status(200).send(result);
    }
});

// read port from custom-environment-variables if in
const port =
    process.env.NODE_ENV === "development"
        ? config.get("localPort")
        : config.get("HEROKUPORT");

app.listen(port, () => console.log(`listening on port ${port}`));
