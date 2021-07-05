import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/facturacionApi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex:true,
  })
  .then((db) => console.log("DataBase is connected"))
  .catch((error) => console.error(error));
