import express from "express";
import createUserRoute from "./src/routes/user/create-user.js";
import userLoginRoute from "./src/routes/user/user-login.js";
import changePasswordRoute from "./src/routes/user/change-password.js";

const app = express();

app.use(express.json());

app.use("/users", createUserRoute);
app.use("/users", userLoginRoute);
app.use("/users", changePasswordRoute);

app.listen(2108, () => {
  console.log("HTTP Server Running! 🚀");
});
