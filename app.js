const express = require("express");
const config = require("config");
const data = require("./data.json");  //получаем данные для отправки на клиентскую часть, для отрисовки компонентов на клиенте
const cors = require("cors")


const app = express();
app.use(cors())

const PORT = config.get("port")||5000;
function start(){
    try{
        app.get("/api/components",(req,res)=>{
                try{
                    res.send(data.components);
            
                }catch(e){
                    throw new Error(e.message);    
            }    
        });

        app.listen(PORT, () => {
            console.log(`App has been started on port ${PORT}`);
        })

    }catch(e){
        console.log("Server Error", e.message);
    }
}

start();