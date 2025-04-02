const express = require("express"); 
const cors = require("cors");
const mongoose = require("mongoose");
const calculationmodel = require("./model/calculator.model");
const connect_to_db = require("./database/db");
const dotenv = require("dotenv")

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connect_to_db();

app.post("/",async(req,res)=>{
    const { expression,result } = req.body;
    try{
        const newcalculation = new calculationmodel({expression,result});
        await newcalculation.save();
        res.status(201).json(newcalculation);
    }catch(err)
    {
        res.status(500).json({ error: err.message });
    }
    
})

app.get("/", async(req,res)=>{
    try{
        const Calculations = await calculationmodel.find().sort({createdAt: -1 });
        res.json(Calculations);
    }catch(err){
        res.status(500).json({ error: err.message});
    }
})
// ----------------------------------------------------------
app.delete("/delete", async (req, res) => {
    try {
        await calculationModel.deleteMany();
        res.json({ message: "All calculations deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log("http://localhost:4000");
})