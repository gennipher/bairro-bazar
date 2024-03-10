import React from "react";


import Logo from '../../assets/logo-bairro-bazar.png'
import GoogleIcon from '../../assets/google-icon.png'
import FacebookPinkIcon from '../../assets/facebook-icon-pink.png'

import Navbar from "../../Components/Navbar/Navbar"
import styles from "../../Styles/login.module.scss"

function Login() {
    return (
        <>
            <Navbar />
            <div className={styles.loginContainer}>
                <div className={styles.loginLogo}>
                    <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
                </div>
                <div className={styles.loginTitulo}>
                    <p>Acesse a sua conta</p>
                </div>
                <div className={styles.loginForm}>
                    <form action="">
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                        <button>Entrar</button>
                    </form>
                </div>
                <div>
                    <p>Ou conecte-se com:</p>
                    <div className={styles.loginSocialIcons}>
                        <img style={{height: "60%"}} src={GoogleIcon} alt="Logo Google"/>
                        <img style={{height: "60%"}} src={FacebookPinkIcon} alt="Logo Facebook"/>
                    </div>
                </div>
                <div className={styles.loginCadastro}>
                    <p>Não tem uma conta? 
                        <a href="/cadastro">
                            <span>Cadastre-se</span>
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login