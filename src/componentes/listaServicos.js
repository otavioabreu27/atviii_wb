/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react"


function listarServicos(servicos){
    return(
        servicos.map((servico, index)=>{
            return (
                <a key={index} className="collection-item">{servico.nome}</a>
            )
        })
    )
}

export default function ListaServicos() {
    const [servicos, setServicos] = useState([]);
    
    useEffect(()=>{
        let servicos = [
            {
                nome: "servico 1"
            },
            {
                nome: "servico 2"
            },
            {
                nome: "servico 3"
            },
            {
                nome: "servico 4"
            }
        ]

        setServicos(servicos)
    }, [])

    return (
        <div className="collection">
            {listarServicos(servicos)}
        </div>
    )
}