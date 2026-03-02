const express = require("express");
const app = express();
const dogFacts = require("./dog_facts");

const PORT = 3000;

app.use(express.json());

/* ===========================
ROOT ROUTE
=========================== */
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Dog Facts API v1"
    });
});

/* ===========================
GET /facts
=========================== */
app.get("/facts", (req, res) => {
    let { number } = req.query;

    // If number is provided, validate it
    if (number !== undefined) {

        number = parseInt(number);

        // Edge Case 1: Invalid number (not integer)
        if (isNaN(number)) {
            return res.status(400).json({
                success: false,
                error: "Query parameter 'number' must be a valid integer."
            });
        }

        // Edge Case 2: Negative number
        if (number <= 0) {
            return res.status(400).json({
                success: false,
                error: "Number must be greater than 0."
            });
        }

        // Edge Case 3: Number larger than available facts
        if (number > dogFacts.length) {
            return res.status(200).json({
                success: true,
                message: "Requested number exceeds available facts. Returning all facts.",
                facts: dogFacts
            });
        }

        return res.status(200).json({
            success: true,
            facts: dogFacts.slice(0, number)
        });
    }

    // Normal Case: No number provided
    return res.status(200).json({
        success: true,
        facts: dogFacts
    });
});

/* ===========================
GET /facts/random
=========================== */
app.get("/facts/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * dogFacts.length);

    res.status(200).json({
        success: true,
        fact: dogFacts[randomIndex]
    });
});

/* ===========================
404 Handler
=========================== */
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: "Route not found"
    });
});

/* ===========================
START SERVER
=========================== */
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});