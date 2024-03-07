import React from "react";

import ProdutoArmario from '../../assets/produto-armario.png'

function Card() {
    return (
        <div className="product-card">
            <p className="produto-titulo">Guarda Roupa de Solteiro Madeira Maciça</p>
            <img src={ProdutoArmario} alt="Guarda Roupa de Solteiro Madeira Maciça" />
            <p className="produto-descricao">Vendo este guarda roupa de solteiro em madeira maciça super bem conservado. Aceito permuta, dinheiro, cartão ou pix. Não tenho frete, então é com retirada no local. </p>
            <p className="produto-preco">R$ 800,00</p>
            <div className="div-fazer-proposta">
                <span>Fazer Proposta</span>
            </div>
        </div>
    )
}

export default Card