export default function FormularioCadastroProduto(props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="nome_produto" type="text" className="validate" />
                        <label htmlFor="nome_produto">produto</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="valor_produto" type="text" className="validate" />
                        <label htmlFor="valor_produto">valor</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="genero_produto" type="text" className="validate" />
                        <label htmlFor="genero_produto">genero</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}