import React from "react";

import Logo from '../../assets/logo-bairro-bazar.png'
import Whatsapp from '../../assets/whatsapp-icon.png'
import Menu from '../../assets/menu-hamburguer.png'
import Lupa from '../../assets/lupa.png'
import AdicionarProduto from '../../assets/adicionar-produto.png'
import Favoritos from '../../assets/favoritos.png'
import Batepapo from '../../assets/bate-papo.png'
import Suporte from '../../assets/suporte.png'
import ArtigosInfantis from '../../assets/artigos-infantis.png'
import AutosPecas from '../../assets/autos-pecas.png'
import CasaDecoracao from '../../assets/casa-decoracao.png'
import EletronicosCelulares from '../../assets/eletronicos-celulares.png'
import EsporteLazer from '../../assets/esporte-lazer.png'
import ModaBeleza from '../../assets/moda-beleza.png'
import MusicasHobbies from '../../assets/musicas-hobbies.png'
import ServicosVagas from '../../assets/servicos-vagas.png'
import ProdutoArmario from '../../assets/produto-armario.png'

function Home() {
    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="nav-container-left">
                        <img style={{height: "50%", cursor: "pointer"}} src={Menu} alt="menu-hamburguer" />
                        <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
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
                            <button id="btn-entrar">Entrar</button>
                            <button id="btn-cadastrar">Cadastrar</button>
                        </div>
                    </div>  
                </div>
            </nav>
            <section className="input-section">
                <div className="menu-card">
                    <div className="cards">
                        <img src={ArtigosInfantis} alt=""/>
                        <p className="manu-card-text">Artigos <br></br> Infantis</p>
                    </div>
                    <div className="cards">
                        <img src={AutosPecas} alt=""/>
                        <p className="manu-card-text">Autos <br></br> e Peças</p>
                    </div>
                    <div className="cards">
                        <img src={CasaDecoracao} alt=""/>
                        <p className="manu-card-text">Casa e <br></br> Decoração</p>
                    </div>
                    <div className="cards">
                        <img src={EletronicosCelulares} alt=""/>
                        <p className="manu-card-text">Eletrônicos e <br></br> Celulares</p>
                    </div>
                    <div className="cards">
                        <img src={EsporteLazer} alt=""/>
                        <p className="manu-card-text">Esporte e <br></br> Lazer</p>
                    </div>
                    <div className="cards">
                        <img src={ModaBeleza} alt=""/>
                        <p className="manu-card-text">Moda e <br></br> Beleza</p>
                    </div>
                    <div className="cards">
                        <img src={MusicasHobbies} alt=""/>
                        <p className="manu-card-text">Músicas e <br></br> Hobbies</p>
                    </div>
                    <div className="cards">
                        <img src={ServicosVagas} alt=""/>
                        <p className="manu-card-text">Serviços e <br></br> Vagas</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="categorias"> Anúncios Patrocinados</div>
            </section>

            <section className="product-section">
                <div className="product-card">
                    <p className="produto-titulo">Guarda Roupa de Solteiro Madeira Maciça</p>
                    <img src={ProdutoArmario} alt="Guarda Roupa de Solteiro Madeira Maciça" />
                    <p className="produto-descricao">Vendo este guarda roupa de solteiro em <br></br> madeira maciça super bem conservado.<br></br> Aceito permuta, dinheiro, cartão ou pix.<br></br> Não tenho frete, então é com retirada no local. </p>
                    <p className="produto-preco">R$ 800,00</p>
                </div>
                <div className="product-card">
                    <p className="produto-titulo">Guarda Roupa de Solteiro Madeira Maciça</p>
                    <img src={ProdutoArmario} alt="Guarda Roupa de Solteiro Madeira Maciça" />
                    <p className="produto-descricao">Vendo este guarda roupa de solteiro em <br></br> madeira maciça super bem conservado.<br></br> Aceito permuta, dinheiro, cartão ou pix.<br></br> Não tenho frete, então é com retirada no local. </p>
                    <p className="produto-preco">R$ 800,00</p>
                </div>
                <div className="product-card">
                    <p className="produto-titulo">Guarda Roupa de Solteiro Madeira Maciça</p>
                    <img src={ProdutoArmario} alt="Guarda Roupa de Solteiro Madeira Maciça" />
                    <p className="produto-descricao">Vendo este guarda roupa de solteiro em <br></br> madeira maciça super bem conservado.<br></br> Aceito permuta, dinheiro, cartão ou pix.<br></br> Não tenho frete, então é com retirada no local. </p>
                    <p className="produto-preco">R$ 800,00</p>
                </div>
                <div className="product-card">
                    <p className="produto-titulo">Guarda Roupa de Solteiro Madeira Maciça</p>
                    <img src={ProdutoArmario} alt="Guarda Roupa de Solteiro Madeira Maciça" />
                    <p className="produto-descricao">Vendo este guarda roupa de solteiro em <br></br> madeira maciça super bem conservado.<br></br> Aceito permuta, dinheiro, cartão ou pix.<br></br> Não tenho frete, então é com retirada no local. </p>
                    <p className="produto-preco">R$ 800,00</p>
                </div>
                <div className="product-card">
                    <p className="produto-titulo">Guarda Roupa de Solteiro Madeira Maciça</p>
                    <img src={ProdutoArmario} alt="Guarda Roupa de Solteiro Madeira Maciça" />
                    <p className="produto-descricao">Vendo este guarda roupa de solteiro em <br></br> madeira maciça super bem conservado.<br></br> Aceito permuta, dinheiro, cartão ou pix.<br></br> Não tenho frete, então é com retirada no local. </p>
                    <p className="produto-preco">R$ 800,00</p>
                </div>
                
            </section>
        </>
        
    )
}

export default Home