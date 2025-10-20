const express = require("express");
const bodyparser = require("body-parser");

const port = 3000;
const app = express();

// Set up the root route handler
app.get("/", (req, res) => {
    // The Date object returns: 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const today = new Date();
    const dayOfWeek = today.getDay();

    // Check if the current day is Saturday (6) or Sunday (0)
    if (dayOfWeek === 6 || dayOfWeek === 0) {
        res.send("<h1>🎉 Yay! It's a weekend! Get some rest!</h1>");
    } else {
        res.send("<h1>😟 Boo! I have to work hard today.</h1>");
    }
});

// Start the server, using the defined port variable
app.listen(port, () => {
    // Use a template literal for clear logging
    console.log(`Server started successfully on port ${port}`);
});
