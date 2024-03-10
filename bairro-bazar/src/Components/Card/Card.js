import React from "react";

import ProdutoArmario from '../../assets/produto-armario.png'
import styles from '../../Styles/main.module.scss'

function Card() {
    return (
        <div className={styles.productCard}>
            <p className={styles.produtoTitulo}>Guarda Roupa de Solteiro Madeira Maciça</p>
            <img src={ProdutoArmario} alt="Guarda Roupa de Solteiro Madeira Maciça" />
            <p className={styles.produtoDescricao}>Vendo este guarda roupa de solteiro em madeira maciça super bem conservado. Aceito permuta, dinheiro, cartão ou pix. Não tenho frete, então é com retirada no local. </p>
            <p className={styles.produtoPreco}>R$ 800,00</p>
            <div className={styles.divFazerProposta}>
                <span>Fazer Proposta</span>
            </div>
        </div>
    )
}

export default Card