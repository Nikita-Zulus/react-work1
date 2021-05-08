import React, { useEffect, useState } from "react";


export const Elements = () => {
    const[items,setItems] = useState([{id:0, header:"", options:[""], text:""}]);
    /*
    данные для отрисовки компонентов можно получить также из firebase базы данных,
    если раскомментировать переменную ниже(только нужно будет закомментировать текщую переменную url),
    сейчас работает вариант получения данных с локального сервера, написанного на express js
    (для запуска проекта исрользовать команду npm run dev)
    если раскомментировать переменную ниже, можно просто запустить проект с помощью команды npm run start из папки client
    */
    //const url = "https://work-react1-default-rtdb.europe-west1.firebasedatabase.app/components.json"; //получить данные из firebase
    const url = "http://localhost:5000/api/components";  //получить данные с локального сервера
    useEffect(()=>{
        try{ 
            fetch(url)
            .then((response)=>response.json())
            .then((data) => setItems(data));
        }catch (e) {
            throw new Error(e.message);
          }
    },[]);
    console.log(items.length)
    return (
        <div className="components">
             {items.map(({header,options,text,id})=> ( 
                <div className="component" key={id}>
                    <div className="title">{header}</div>
                    <ul className="elems">
                        {options.map((option)=>(
                          <li key={option} className="elems__elem" >{option}</li>
                        ))}  
                    </ul>
                    <div className="text">{text}</div>
                </div>
            ))} 
        </div>    
    )
}