import app from "../server";

app.use(`/user`, async (req, res) => {
  console.log("user api successfully created");
});
