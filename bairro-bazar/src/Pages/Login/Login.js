import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo-bairro-bazar.png'
import GoogleIcon from '../../assets/google-icon.png'
import FacebookPinkIcon from '../../assets/facebook-icon-pink.png'
import Navbar from "../../Components/Navbar/Navbar"
import styles from "../../Styles/login.module.scss"
import api from "../../Services/api";
import { UserContext } from "../../Context/UserContext";

function Login() {
    const navigate = useNavigate();
    const [userData, setUserData] = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginHandle(e) {
        e.preventDefault()
        try{
            const userData = await api.post('/login', {email, password})
            setUserData(prevState => ({
                ... prevState,
                isLogged: true
            }));
            localStorage.setItem('token', userData.data.token)
            navigate("/home")
            
        } catch(err) {
            alert('Falha no login, tente novamente')
            console.log('email:', email, '- senha:', password)
        }
    }

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
                    <form onSubmit={loginHandle}>
                        <input 
                            type="email" 
                            placeholder="E-mail" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Entrar</button>
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