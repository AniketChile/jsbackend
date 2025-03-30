import express from "express";
const app = new express();


// app.get("/",(req,res)=>{
//     res.send("server is ready")
// });

app.use(express.static('dist'));

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            setup:"I got my daughter a fridge for her birthday",
            punchline:"I can't wait to see her happy face on it"
        },
        {
            id:2,
            setup:"How did the hacker escape the police?",
            punchline:"He just ransomware!"
        },
        {
            id:3,
            setup:"Why do bees stay in the hive in the winter?",
            punchline:"Swarm"
        }
    ]
    res.send(jokes);
})



const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)    
})