const { IMAGES } = require('../data/dummy-data');
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({ message: "OK" });
});

router.get("/gallery-images", (req, res) => {
    res.json(IMAGES);
});

module.exports = router;
