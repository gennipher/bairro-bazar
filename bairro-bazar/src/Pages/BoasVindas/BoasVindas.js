import React from "react"
import PessoasInteragindo from "../../assets/pessoas-interagindo.png"
import UsandoCelular from "../../assets/usando-celular.png"
import Navbar from "../../Components/Navbar/Navbar"
import styles from "../../Styles/boasVindas.module.scss"

function BoasVindas() {
    return (
        <>
            <Navbar />

            <div className={styles.bemVindo}>
                <div>
                    <h1>Bem-Vindo (a),</h1>
                </div>
                <div>
                    <p>Ao Bairro Bazar</p>
                </div>
            </div>

            <div className={styles.sessao1}>
                <div className="sessao1Texto">
                    <p>A plataforma definitiva de comércio local que conecta os moradores de um bairro para comprar e vender itens novos ou usados uns aos outros, promove e fortalece a economia local, a sustentabilidade e a conexão entre vizinhos</p>
                </div>
                <div className={styles.sessao1Img}>
                    <img src={PessoasInteragindo} alt="Pessoas interagindo pelo celular" />
                </div>
            </div>

            <div className={styles.sessao2}>
                <div className={styles.sessao2Img}>
                    <img src={UsandoCelular} alt="Duas mãos usando um celular" />
                </div>
                <div className={styles.sessao2Texto}>
                    <p>Com o Bairro Bazar, você pode facilmente publicar anúncios e buscar produtos dentro da comunidade local</p>
                    <p>Além disso, nosso sistema de mensagens permite a comunicação direta entre vendedores e interessados nos produtos</p>
                </div>
            </div>
            
            <div className={styles.sessao3}>
                <div className={styles.sessao3Convite}>
                    <p>Junte-se a nós e faça parte da nossa comunidade local de compradores e vendedores!</p>
                </div>
                <div className={styles.sessao3Btns}>
                    <a href="/cadastro">
                        <button>Registre-se</button>
                    </a>
                    <a href="/login">
                        <button>Logar</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default BoasVindas