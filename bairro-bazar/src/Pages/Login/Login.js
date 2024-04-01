import React, { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Context/UserContext"
import { jwtDecode } from "jwt-decode"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Logo from '../../assets/logo-bairro-bazar.png'
import GoogleIcon from '../../assets/google-icon.png'
import FacebookPinkIcon from '../../assets/facebook-icon-pink.png'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import styles from "../../Styles/login.module.scss"
import api from "../../Services/api"

function Login() {
    const navigate = useNavigate()
    const [userData, setUserData] = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setUserData(prevState => ({
                ...prevState,
                isLogged: true
            }))
        }
    }, [])

    async function loginHandle(e) {
        e.preventDefault()
        try{
            const response  = await api.post('/login', {email, password})
            const { token } = response.data
            localStorage.setItem('token', token)

            if (token) {
                try {
                    const decoded = jwtDecode(token)
                    localStorage.setItem('userId', decoded.userId)
                    const id = decoded.userId

                    const userDataResponse = await api.get(`/users/${id}`)

                    setUserData({
                        isLogged: true,
                        email: userDataResponse.data.email,
                        firstName: userDataResponse.data.firstName,
                        lastName: userDataResponse.data.lastName,
                        neighborhood: userDataResponse.data.neighborhood
                    })
                } catch (error) {
                    console.error('Erro ao decodificar token:', error)
                }
            } else {
                console.warn('Token JWT não encontrado no localStorage.')
            }
            navigate("/home")
            
        } catch(err) {
            alert('E-mail ou senha inválido')
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
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="google-tooltip">Opção disponível em breve</Tooltip>}
                        >
                            <img style={{height: "60%", cursor: "pointer"}} src={GoogleIcon} alt="Logo Google"/>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="facebook-tooltip">Opção disponível em breve</Tooltip>}
                        >
                            <img style={{height: "60%", cursor: "pointer"}} src={FacebookPinkIcon} alt="Logo Facebook"/>
                        </OverlayTrigger>
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
            
            <Footer />
        </>
    )
}

export default Login