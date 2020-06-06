import logger from "fancy-log";
import { getConfig } from "./app/config";
import app from "./app/app";

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	logger.info(`The server is now running on port ${PORT}`);
});
