import React, {useRef, useState} from "react";
import { GroupItem } from "./componets/GroupItem";
import { v4 as uuidv4 } from 'uuid';
import "./Estilos.css"


export function App(){
    const [ListaData, setListaData] = useState({id:1,data:"Prueba."})

    const dataInputRef = useRef();

    const handleAdd = () => {
        const data = dataInputRef.current.value;
        if( data === "") return;

        setListaData(ListaData => ({...ListaData,data}));
        dataInputRef.current.value= null;
    }

    return(
        <div className="box">
                <div>
                <input ref={dataInputRef} type='text' placeholder="Digite algo"></input>
                <button onClick={handleAdd}>Agregar</button>
                </div>
                <div>
                {ListaData.data}
                </div>
        </div>
    )
}