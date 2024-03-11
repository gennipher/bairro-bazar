import React from "react";

import Navbar from "../../Components/Navbar/Navbar"
import Card from "../../Components/Card/Card"
import MenuCard from "../../Components/MenuCard/MenuCard"

import styles from '../../Styles/main.module.scss'

function NovoProduto() {
    return (
        <>
            <Navbar />
            <section className={styles.novoProduto}>
                <form className={styles.novoProdutoForm}>
                    <p>Adicionar Produto</p>
                    <div className={styles.novoProdutoFormInputs}>
                        <input type="text" placeholder="Nome do produto" />
                        <textarea type="text" rows="4" placeholder="Descrição do produto" />
                        <input type="number"  min="1" step="0.01" placeholder="Valor do produto" />
                        <button>Adicionar Produto</button>
                    </div>
                </form>       
            </section>
        </>
        
    )
}

export default NovoProduto