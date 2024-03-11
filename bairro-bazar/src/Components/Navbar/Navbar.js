import React, { useContext } from "react";

import Logo from '../../assets/logo-bairro-bazar.png'
import Menu from '../../assets/menu-hamburguer.png'
import Lupa from '../../assets/lupa.png'
import AdicionarProduto from '../../assets/adicionar-produto.png'
import Favoritos from '../../assets/favoritos.png'
import Batepapo from '../../assets/bate-papo.png'
import Suporte from '../../assets/suporte.png'

import styles from '../../Styles/main.module.scss'
import { UserContext } from '../../Context/UserContext'

function Navbar() {
    const [userData, setUserData] = useContext(UserContext)
    //alert(userData.message)

    return (
        <nav>
            <div className={styles.navContainer}>
                <div className={styles.navContainerLeft}>
                    <img style={{height: "50%", cursor: "pointer"}} src={Menu} alt="menu-hamburguer" />
                    <a href="/home">
                        <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
                    </a>
                    <div className={styles.navInputPesquisar}>
                        <input className={styles.navInputPesquisarInput} type="text" placeholder="Pesquisar"/>
                        <img src={Lupa} alt="lupa-pesqusiar"/>
                    </div>
                </div>  
                
                <div className={styles.navContainerRight}>
                    {userData.isLogged 
                        ?   <div className={styles.navContainerRight}>
                                <a href="/novoProduto">
                                    <img src={AdicionarProduto} alt="adicionar produto"/>
                                </a>
                                <img src={Favoritos} alt="favoritos"/>
                                <img src={Batepapo} alt="bate papo"/>
                                <img src={Suporte} alt="suporte"/>
                                <button  className={styles.btnEntrar} src="/login">Sair</button>
                            </div>
                        :   <div className={styles.withoutSpace}>
                                <a href="/login">
                                    <button className={styles.btnEntrar} src="/login">Entrar</button>
                                </a> 
                                <a href="/cadastro">
                                    <button  className={styles.btnCadastrar}>Cadastrar</button>
                                </a>
                            </div>
                    }
                        
                </div>  
            </div>
        </nav>
    )
}

export default Navbar