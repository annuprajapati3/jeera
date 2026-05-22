require("dns").setDefaultResultOrder("ipv4first");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGODB)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const Routes = require("./routes/endpoints");



app.get("/", (req, res) => {
    res.send("API Running Successfully");
});
app.use( Routes);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});