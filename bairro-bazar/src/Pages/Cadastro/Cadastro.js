import React from "react";

import Logo from '../../assets/logo-bairro-bazar.png'
import GoogleIcon from '../../assets/google-icon.png'
import FacebookPinkIcon from '../../assets/facebook-icon-pink.png'

import Navbar from "../../Components/Navbar/Navbar"
import "../../Styles/cadastro.scss"

function Cadastro() {
    return (
        <>
            <Navbar />
            <div className="cadastro-container">
                <div className="cadastro-logo">
                    <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
                </div>
                <div className="cadastro-titulo">
                    <p>Crie sua conta. É grátis!</p>
                    <div className="login-social-icons">
                        <img style={{height: "60%"}} src={GoogleIcon} alt="Logo Google"/>
                        <img style={{height: "60%"}} src={FacebookPinkIcon} alt="Logo Facebook"/>
                    </div>
                </div>
                <div className="cadastro-form">
                    <form action="">
                        <div className="form-colunas">
                            <div className="form-colunas-colunas">
                                <input type="text" placeholder="Nome" />
                                <input type="text" placeholder="E-mail" />
                                <input type="text" placeholder="CPF" />
                                <input type="text" placeholder="CEP" />
                                <input type="text" placeholder="Bairro" />
                                <input type="text" placeholder="UF" />
                            </div>
                            <div className="form-colunas-colunas">
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
                
                <div className="cadastro-cadastro">
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