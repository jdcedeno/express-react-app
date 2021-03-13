require("dotenv").config();
const config = require("config");
const express = require("express");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    let test = config.get("TEST"); // custom-environment-variables
    let herokuport = config.get("HEROKUPORT"); // custom-environment-variables
    let defaultTest = config.get("defaultTtest"); // default.js OR production override config
    let localPort = config.get("localPort"); // default.js (production) config
    if (process.env.NODE_ENV === "development") {
        let result = {
            TEST: test,
            HEROKUPORT: herokuport,
            defaultTest,
            localPort: localPort,
        };
        res.status(200).send(result);
    } else {
        let result = {
            TEST: test,
            HEROKUPORT: herokuport,
            defaultTest,
        };
        res.status(200).send(result);
    }
});

// read port from custom-environment-variables if in
const port =
    proces.env.NODE_ENV === "development"
        ? config.get("localPort")
        : config.get("HEROKUPORT");

app.listen(port, () => console.log(`listening on port ${port}`));
