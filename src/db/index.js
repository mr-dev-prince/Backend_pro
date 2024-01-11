import mongoose from "mongoose";
import chalk from "chalk";
import { DB_NAME } from "../../conjurring.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `${chalk.yellow("MongoDB connected !\n")}DB HOST ${chalk.magenta(
        connectionInstance.connection.host
      )}`
    );
  } catch (error) {
    console.log(`${chalk.red("MongoDB connection failed")}`, error);
    process.exit(1);
  }
};

export default connectDB;
   