const express = require("express");
const app = express();

app.get("./", (req, res) => {
	res.send("Welcome to courier delivery services!!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`The server is now running on port ${PORT}`);
});

export default app;
