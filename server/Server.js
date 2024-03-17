const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/ConnectDB");
connectDB();
const route = require("./Route/RegistrationRoute");
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares

app.use(express.json());
app.use(cors());
app.use("/api/Registration", route);

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
