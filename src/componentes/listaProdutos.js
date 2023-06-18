/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react"


function listarProdutos(produtos){
    return(
        produtos.map((produto, index)=>{
            return (
                <a key={index} className="collection-item">{produto.nome}</a>
            )
        })
    )
}

export default function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(()=>{
        let produtos = [
            {
                nome: "Produto 1"
            },
            {
                nome: "Produto 2"
            },
            {
                nome: "Produto 3"
            },
            {
                nome: "Produto 4"
            }
        ]

        setProdutos(produtos)
    }, [])

    return (
        <div className="collection">
            {listarProdutos(produtos)}
        </div>
    )
}