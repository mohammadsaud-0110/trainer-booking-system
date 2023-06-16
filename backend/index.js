const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const { userRoute } = require("./controller/user.route");
const { bookingRoute } = require("./controller/booking.route");
const { authRoute } = require("./controller/auth.routes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

//---image upload
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
////- image upload end

app.get("/", (req, res) => {
  res.send({
    "<backendlink>/":
      "default route (add all routes here to show at home page of backend server )",
  });
});

app.use("/booking", bookingRoute);
app.use("/user", userRoute);

//SWAGGER________________________________________________________________

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node JS API Project for FlexFit",
      version: "1.0.0",
      description:
        "About : - Documentation of application FlexFit which is a Fitness class Booking application in which you can hire Top quality Trainers or become a Trainer itself.",
      license: {
        name: "FlexFit",
      },
      contact: {
        name: "FlexFit",
        url: "flexfit.com",
        email: "flexfit@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.serverPort}`,
      },
    ],
  },
  apis: ["./controller/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);
app.use("/apidocs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Listen to server________________________________________________________________

app.listen(process.env.serverPort, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log("Server: " + process.env.serverPort);
  } catch (error) {
    console.log("Error: " + error.message);
  }
});
