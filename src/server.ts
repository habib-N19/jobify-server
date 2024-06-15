import mongoose from "mongoose";
import { config } from "./app/config/config";
import app from "./app";

async function server() {
	try {
		await mongoose.connect(config.mongodbUri as string, {
			dbName: "Jobify",
		});
		app.listen(config.port, () => {
			console.log(`Server is running at port ${config.port}`);
		});
	} catch (error: any) {
		console.log(`Error : ${error.message}`);
	}
}
server();
