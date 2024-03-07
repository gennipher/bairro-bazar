import React from "react";

import PessoasInteragindo from "../../assets/pessoas-interagindo.png"
import UsandoCelular from "../../assets/usando-celular.png"

import Navbar from "../../Components/Navbar/Navbar"
import "../../Styles/boasVindas.scss"

function BoasVindas() {
    return (
        <>
            <Navbar />
            <div className="bem-vindo">
                <div>
                    <h1>Bem-Vindo (a),</h1>
                </div>
                <div>
                    <p>Ao Bairro Bazar</p>
                </div>
            </div>
            <div className="sessao1">
                <div className="sessao1-texto">
                    <p>A plataforma definitiva de comércio local que conecta os moradores de um bairro para comprar e vender itens novos ou usados uns aos outros, promove e fortalece a economia local, a sustentabilidade e a conexão entre vizinhos</p>
                </div>
                <div className="sessao1-img">
                    <img src={PessoasInteragindo} alt="Pessoas interagindo pelo celular" />
                </div>
            </div>
            <div className="sessao2">
                <div className="sessao2-img">
                    <img src={UsandoCelular} alt="Duas mãos usando um celular" />
                </div>
                <div className="sessao2-texto">
                    <p>Com o Bairro Bazar, você pode facilmente publicar anúncios e buscar produtos dentro da comunidade local</p>
                    <p>Além disso, nosso sistema de mensagens permite a comunicação direta entre vendedores e interessados nos produtos</p>
                </div>
            </div>
            <div className="sessao3">
                <div className="sessao3-convite">
                    <p>Junte-se a nós e faça parte da nossa comunidade local de compradores e vendedores!</p>
                </div>
                <div className="sessao3-btns">
                    <a href="/cadastro">
                        <button>Registre-se</button>
                    </a>
                    <a href="/home">
                        <button>Acessar sem logar</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default BoasVindas