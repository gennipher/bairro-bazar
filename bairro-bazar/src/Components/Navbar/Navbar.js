import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Logo from '../../assets/logo-bairro-bazar.png'
import AdicionarProduto from '../../assets/adicionar-produto.png'
import Favoritos from '../../assets/favoritos.png'
import Batepapo from '../../assets/bate-papo.png'
import Suporte from '../../assets/suporte.png'
import { UserContext } from '../../Context/UserContext'
import styles from '../../Styles/main.module.scss'

function Navbar() {
    const navigate = useNavigate()
    const [userData, setUserData] = useContext(UserContext)

    const handleLogout = () => {
        setUserData({ isLogged: false, email: '', firstName: '', lastName: '', neighborhood: '' })
        localStorage.removeItem('token')
        navigate("/login")
    }

    const renderTooltip = (text) => (
        <Tooltip>{text}</Tooltip>
    );

    return (
        <nav>
            <div className={styles.navContainer}>
                <div className={styles.navContainerLeft}>
                    {userData.isLogged 
                        ?   <>
                                <Link to="/home">
                                    <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
                                </Link>
                            </> 
                        : (
                            
                            <Link to="/home">
                                <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
                            </Link>
                        )
                    }
                </div>  
                
                <div className={styles.navContainerRight}>
                    {userData.isLogged 
                        ?(
                            <>
                                <Link to="/home/novoProduto">
                                    <img src={AdicionarProduto} alt="Adicionar Produto" />
                                </Link>
                                <OverlayTrigger placement="bottom" overlay={renderTooltip("Em breve!")}>
                                    <img src={Favoritos} alt="favoritos"/>
                                </OverlayTrigger>
                                <OverlayTrigger placement="bottom" overlay={renderTooltip("Em breve!")}>
                                    <img src={Batepapo} alt="bate papo"/>
                                </OverlayTrigger>
                                <Link to="/home/suporte">
                                    <img src={Suporte} alt="suporte"/>
                                </Link>
                                
                                <DropdownButton id="dropdown-item-button" title="Olá">
                                    <Dropdown.Item as="button"><Link to="editar-perfil" className={styles.dropdownLink}>Editar Perfil</Link></Dropdown.Item>
                                    <Dropdown.Item as="button"><Link to="meus-anuncios" className={styles.dropdownLink}>Meus Anúncios</Link></Dropdown.Item>
                                    <Dropdown.Item as="button"onClick={handleLogout} className={styles.dropdownLink}>Sair</Dropdown.Item>
                                </DropdownButton>
                            </>
                        )
                        :(
                            <div className={styles.withoutSpace}>
                                <a href="/login">
                                    <button className={styles.btnEntrar} src="/login">Entrar</button>
                                </a> 
                                <a href="/cadastro">
                                    <button  className={styles.btnCadastrar}>Cadastrar</button>
                                </a>
                            </div>
                        )
                    }
                        
                </div>  
            </div>
        </nav>
    )
}

export default Navbar