/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react"


function listarClientes(clientes){
    return(
        clientes.map((cliente, index)=>{
            return (
                <a key={index} className="collection-item">{cliente.nome}</a>
            )
        })
    )
}

export default function ListaClientes() {
    const [clientes, setClientes] = useState([]);
    
    useEffect(()=>{
        let clientes = [
            {
                nome: "Cliente1"
            },
            {
                nome: "Cliente2"
            },
            {
                nome: "Cliente3"
            },
            {
                nome: "Cliente4"
            }
        ]

        setClientes(clientes)
    }, [])

    return (
        <div className="collection">
            {listarClientes(clientes)}
        </div>
    )
}