import express from "express";
import cors from "cors";
import events from "./routes/events"

const app = express();
const port = 8080;
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors(options));
app.options('*', cors)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/orgEvents", events)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
