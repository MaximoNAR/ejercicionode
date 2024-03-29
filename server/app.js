import express from "express";
import config from "./config.js";
import routes from "./routes/routes.js";
import cors from "cors";
import session from "express-session";
import fileupload from "express-fileupload";

const app = express();

//settings
app.set("port", config.port);

const ACEPTED_ORIGINS = [
  "http://localhost:3000",
  "http://localhost:3001"
]

const corsOptions = {
  origin: ACEPTED_ORIGINS,
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors(corsOptions));
app.use(fileupload()); //Sirve para subir imagenes desde la app.

app.use(
  session({
    secret: "123456", //process.env.SECRET_KEY
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: { maxAge: 1200000 }, //20 m, 20000 20 seg,
  })
);

app.use(routes);


export default app;