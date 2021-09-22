const express = require("express");
const cors = require("cors");
const config = require("./app/config");
const setupContactRoutes = require("./app/routers/contact.route");
const {BadRequestError} = require("./app/helper/error");

const app = express();

setupContactRoutes(app);

app.use(cors({ origin: config.app.origins }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/' , (req , res)=>{

   res.json({ message: "hello word" });

});

app.use((rep, res, next) => {
    next(new BadRequestError(404, "request not found!"));
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error"
    });
});

const PORT = config.app.port;

app.listen(PORT, ()=>
    {
        console.log(`PORT: ${PORT}`);
    }
);

