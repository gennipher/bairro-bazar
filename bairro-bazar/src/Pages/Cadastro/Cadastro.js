import React from "react";

import Logo from '../../assets/logo-bairro-bazar.png'
import GoogleIcon from '../../assets/google-icon.png'
import FacebookPinkIcon from '../../assets/facebook-icon-pink.png'

import Navbar from "../../Components/Navbar/Navbar"
import styles from "../../Styles/cadastro.module.scss"

function Cadastro() {
    return (
        <>
            <Navbar />
            <div className={styles.cadastroContainer}>
                <div className={styles.cadastroLogo}>
                    <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
                </div>
                <div className={styles.cadastroTitulo}>
                    <p>Crie sua conta. É grátis!</p>
                    <div className={styles.loginSocialIcons}>
                        <img style={{height: "60%"}} src={GoogleIcon} alt="Logo Google"/>
                        <img style={{height: "60%"}} src={FacebookPinkIcon} alt="Logo Facebook"/>
                    </div>
                </div>
                <div className={styles.cadastroForm}>
                    <form action="">
                        <div className={styles.formColunas}>
                            <div className="form-colunas-colunas">
                                <input type="text" placeholder="Nome" />
                                <input type="text" placeholder="E-mail" />
                                <input type="text" placeholder="CPF" />
                                <input type="text" placeholder="CEP" />
                                <input type="text" placeholder="Bairro" />
                                <input type="text" placeholder="UF" />
                            </div>
                            <div className={styles.formColunasColunas}>
                                <input type="text" placeholder="Sobrenome" />
                                <input type="text" placeholder="Senha" />
                                <input type="text" placeholder="Telefone" />
                                <input type="text" placeholder="Logradouro" />
                                <input type="text" placeholder="Cidade" />
                            </div>
                        </div>
                        <button>Cadastrar</button>
                    </form>
                </div>
                
                <div className={styles.cadastroCadastro}>
                    <p>Já tem uma conta? 
                        <a href="/login">
                            <span>Entre</span>
                        </a>
                        
                    </p>
                </div>
            </div>
        </>
    )
}

export default Cadastro