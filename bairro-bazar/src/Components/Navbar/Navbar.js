import React from "react";

import Logo from '../../assets/logo-bairro-bazar.png'
import Menu from '../../assets/menu-hamburguer.png'
import Lupa from '../../assets/lupa.png'
import AdicionarProduto from '../../assets/adicionar-produto.png'
import Favoritos from '../../assets/favoritos.png'
import Batepapo from '../../assets/bate-papo.png'
import Suporte from '../../assets/suporte.png'

function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-container-left">
                    <img style={{height: "50%", cursor: "pointer"}} src={Menu} alt="menu-hamburguer" />
                    <a href="/home">
                        <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
                    </a>
                    <div className="nav-input-pesquisar">
                        <input id="nav-input-pesquisar-input" type="text" placeholder="Pesquisar"/>
                        <img src={Lupa} alt="lupa-pesqusiar"/>
                    </div>
                </div>  
                <div className="nav-container-right">
                    <img src={AdicionarProduto} alt="adicionar produto"/>
                    <img src={Favoritos} alt="favoritos"/>
                    <img src={Batepapo} alt="bate papo"/>
                    <img src={Suporte} alt="suporte"/>
                    <div className="without-space">
                        <a href="/login">
                            <button id="btn-entrar" src="/login">Entrar</button>
                        </a>
                        <a href="/cadastro">
                            <button id="btn-cadastrar">Cadastrar</button>
                        </a>
                    </div>
                </div>  
            </div>
        </nav>
    )
}

export default Navbar