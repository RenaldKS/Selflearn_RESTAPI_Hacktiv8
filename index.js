const express = require('express');
const cors = require('cors');
const app = express();

const todosRouter = require("./routes")

app.use(express.json());
app.use(cors());
app.use("/todos", todosRouter) 

app.get("/", (req,res) =>{
    res.send("Hello World!");
});

const PORT = process.env.PORT || 6969;

app.listen(PORT,() => {
    console.log(`app started on port ${PORT}`)
});