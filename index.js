const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
   const status = {
      Status: "Running",
   };

   response.json(status);
});

app.post("/issue-otp", (request, response) => {
   const status = {
      status: "post request",
   };
   response.json(status);
});
