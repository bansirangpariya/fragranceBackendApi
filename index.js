require("dotenv").config();
const express = require("express");
const productRoute = require("./routes/product");
const app = express();

app.use(express.json());

app.use("/api/perfume", productRoute);

app.get("/", (req, res) => {
  res.send("Hello, this is your response from port 8000!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
