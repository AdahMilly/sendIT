const express = require("express");
const app = express();

app.get("./", (req, res) => {
	res.send("Welcome to courier delivery services!!");
});



export default app;
