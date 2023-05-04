import mongoose from "mongoose";
import express from "express";

const app = express();

const MongoConnect = () => {
  mongoose
    .connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      app.listen(process.env.PORT, () =>
        console.log(`Server running on port : ${process.env.PORT}`)
      )
    )
    .catch((error) => console.log(error.message));
};

export default MongoConnect;
