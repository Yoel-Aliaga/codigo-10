import express from "express";

const app = express();
app.use(express.json());

const tasks = [];

app.get("/", (req,res)=> {
    return res.json({
        message:"Hola",
        // name:"Yoel",
        // lastname:"Aliaga"
    });
});


// GET: generalmente se usa para pedirle los datos al servidor:
app.get("/tasks", (req,res) => {
    res.json({
        tasks: task,
    });
});

// POST: GENERALMENTE SE USA PARA ENVIARLE DATOS AL SERVIDOR

app.post("/task",(req,res)=> {});

// PUT:
// DELETE:

app.listen(4000);