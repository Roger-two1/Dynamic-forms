const express = require("express");
const { PrismaClient } = require('@prisma/client');
const bodyParser = require("body-parser");
const cors = require("cors")

const prisma = new PrismaClient();
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        msg: "hi there"
    })
});

app.post("/submit", async (req, res) => {
    try {
        const { formType, name, countryCode, phoneNumber } = req.body;
        const newEntry = await prisma.formData.create({
            data: {
                formType,
                name,
                countryCode,
                phoneNumber
            }
        });

        res.status(201).json(newEntry);
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
})

app.listen(5000)