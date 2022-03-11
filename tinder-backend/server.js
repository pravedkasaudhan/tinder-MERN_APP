import express from "express";
import mongoose from "mongoose";
import cards from './dbCards.js'; 
import Cors from 'cors';

//app config
const app=express();
const port =process.env.PORT || 8001;
const connection_url="mongodb+srv://Praved:praved2017@tinderdb.pzghh.mongodb.net/tinderDB?retryWrites=true&w=majority";

//middleware

app.use(express.json());
app.use(Cors());

//DB Config1

mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    // useCreateIndex:true,
    // useFindAndModify:false
}).then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));



//API Endpoints
app.get("/", (req,res)=>{
    res.status(200).send("hello praved full stack developer");
})

app.post("/tinder/card",(req,res)=>{
    const dbCard=req.body;
    cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/card',(req,res)=>{
    cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})






//Listner

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})