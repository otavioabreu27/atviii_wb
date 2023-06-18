import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaClientes from "./listaClientes";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']} />
                    <ListaClientes tema="purple lighten-4" />
                    <button className="btn waves-effect waves-light purple lighten-4" onClick={(e) => {setTela("cadastrarCliente")}}>
                        Cadastrar Cliente
                    </button>
                </>
            )
        } else if (tela === 'cadastrarCliente'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']} />
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Produtos'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']} />
                    <ListaProdutos tema="purple lighten-4" />
                    <button className="btn waves-effect waves-light purple lighten-4" onClick={(e) => {setTela("cadastrarProduto")}}>
                        Cadastrar Produto
                    </button>
                </>
            )
        } else if (tela === 'cadastrarProduto'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']} />
                    <FormularioCadastroProduto tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Serviços'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']} />
                    <ListaServicos tema="purple lighten-4" />
                    <button className="btn waves-effect waves-light purple lighten-4" onClick={(e) => {setTela("cadastrarServico")}}>
                        Cadastrar Serviço
                    </button>
                </>
            )
        } else if (tela === 'cadastrarServico'){
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']} />
                    <FormularioCadastroServico tema="purple lighten-4" />
                </>
            )
        } else {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']} />
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}