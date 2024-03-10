import React from "react";

import Navbar from "../../Components/Navbar/Navbar"
import Card from "../../Components/Card/Card"
import MenuCard from "../../Components/MenuCard/MenuCard"

function NovoProduto() {
    return (
        <>
            <Navbar />
            <section className="input-section">
                <form>
                    <p>Adicionar Produto</p>
                    <div className="form-inputs">
                        <input type="text" placeholder="Nome do produto" />
                        <input type="number" placeholder="Valor do produto" />
                        <button>Adicionar Produto</button>
                    </div>
                </form>       
            </section>
        </>
        
    )
}

export default NovoProduto