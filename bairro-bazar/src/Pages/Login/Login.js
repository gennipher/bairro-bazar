import React from "react";


import Logo from '../../assets/logo-bairro-bazar.png'
import GoogleIcon from '../../assets/google-icon.png'
import FacebookPinkIcon from '../../assets/facebook-icon-pink.png'

import Navbar from "../../Components/Navbar/Navbar"
import "../../Styles/login.scss"

function Login() {
    return (
        <>
            <Navbar />
            <div className="login-container">
                <div className="login-logo">
                    <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
                </div>
                <div className="login-titulo">
                    <p>Acesse a sua conta</p>
                </div>
                <div className="login-form">
                    <form action="">
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                        <button>Entrar</button>
                    </form>
                </div>
                <div>
                    <p>Ou conecte-se com:</p>
                    <div className="login-social-icons">
                        <img style={{height: "60%"}} src={GoogleIcon} alt="Logo Google"/>
                        <img style={{height: "60%"}} src={FacebookPinkIcon} alt="Logo Facebook"/>
                    </div>
                </div>
                <div className="login-cadastro">
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