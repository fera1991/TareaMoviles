import React, {useRef, useState} from "react";
import { GroupItem } from "./componets/GroupItem";
import { v4 as uuidv4 } from 'uuid';
import "./Estilos.css"


export function App(){
    const [ListaData, setListaData] = useState([])

    const dataInputRef = useRef();

    const handleAdd = () => {
        const data = dataInputRef.current.value;
        if( data === "") return;
        
        setListaData((ListaData) => {
            return[...ListaData,{ id: uuidv4(),data}]
        });
        dataInputRef.current.value= null;
    }

    const removeHandler=(id)=>{
         setListaData(ListaData.filter(data => data.id!==id))
    }

    return(
        <div>   <div className="text"> TODO </div>
                <div className="center">
                <input className="todo-input" ref={dataInputRef} type='text' placeholder="Digite algo"></input>
                <button className="todo-button"  onClick={handleAdd}>Agregar</button>
                </div>
                <div className="center">
                <GroupItem ListaData={ListaData} removeHandler={removeHandler}></GroupItem>
                </div>
        </div>
    )
}