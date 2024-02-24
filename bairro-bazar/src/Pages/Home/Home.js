import React from "react";

import Logo from '../../assets/logo-bairro-bazar.png'
import Whatsapp from '../../assets/whatsapp-icon.png'
import Menu from '../../assets/menu-hamburguer.png'
import Lupa from '../../assets/lupa.png'
import AdicionarProduto from '../../assets/adicionar-produto.png'
import Favoritos from '../../assets/favoritos.png'
import Batepapo from '../../assets/bate-papo.png'
import Suporte from '../../assets/suporte.png'

function Home() {
    return (
        <>
            <nav>
                <div className="nav-container">
                    <img src={Menu} alt="menu-hamburguer" />
                    <img src={Logo} alt="Logo Bairro Bazar"/>
                    <div className="nav-input-pesquisar">
                        <img src={Lupa} alt="lupa-pesqusiar"/>
                        <input type="text" placeholder="Pesquisar"/>
                    </div>
                    <img src={AdicionarProduto} alt="adicionar produto"/>
                    <img src={Favoritos} alt="favoritos"/>
                    <img src={Batepapo} alt="bate papo"/>
                    <img src={Suporte} alt="suporte"/>
                    <div className="without-space">
                        <button id="btn-entrar">Entrar</button>
                        <button id="btn-cadastrar">Cadastrar</button>
                    </div>
                    
                    
                </div>
            </nav>
            <section className="input-section">
                <form>
                    <h1>Pesquisar produtos</h1>
                    <div className="form-inputs">
                        <input type="text" placeholder="Nome do Produto"/>
                        <input type="number" placeholder="preço máximo"/>
                    </div>
                </form>
            </section>
            <section className="product-section">
                <div className="card">
                    <h2>Nome do Produto</h2>
                    <h1>R$ 100,00</h1>
                    <h3>Fulaninho da Silva</h3>
                    <div className="card-info">
                        <img src={Whatsapp} alt=""/>
                        <p>+55 (21) 9 9999-9999</p>
                    </div>
                </div>
                <div className="card">
                    <h2>Nome do Produto</h2>
                    <h1>R$ 100,00</h1>
                    <h3>Fulaninho da Silva</h3>
                    <div className="card-info">
                        <img src="" alt=""/>
                        <p>+55 (21) 9 9999-9999</p>
                    </div>
                </div>
                <div className="card">
                    <h2>Nome do Produto</h2>
                    <h1>R$ 100,00</h1>
                    <h3>Fulaninho da Silva</h3>
                    <div className="card-info">
                        <img src="" alt=""/>
                        <p>+55 (21) 9 9999-9999</p>
                    </div>
                </div>
                <div className="card">
                    <h2>Nome do Produto</h2>
                    <h1>R$ 100,00</h1>
                    <h3>Fulaninho da Silva</h3>
                    <div className="card-info">
                        <img src="" alt=""/>
                        <p>+55 (21) 9 9999-9999</p>
                    </div>
                </div>
                <div className="card">
                    <h2>Nome do Produto</h2>
                    <h1>R$ 100,00</h1>
                    <h3>Fulaninho da Silva</h3>
                    <div className="card-info">
                        <img src="" alt=""/>
                        <p>+55 (21) 9 9999-9999</p>
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default Home