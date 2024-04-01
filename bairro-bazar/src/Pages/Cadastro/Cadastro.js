import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import cep from 'cep-promise'
import InputMask from 'react-input-mask'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Toast from 'react-bootstrap/Toast'
import Modal from 'react-bootstrap/Modal'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Logo from '../../assets/logo-bairro-bazar.png'
import GoogleIcon from '../../assets/google-icon.png'
import FacebookPinkIcon from '../../assets/facebook-icon-pink.png'
import styles from "../../Styles/cadastro.module.scss"
import api from "../../Services/api"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import MarkdownContent from "../../Components/MarkdownContent/MarkdownContent"

function Cadastro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        cpf: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        neighborhood: "",
        city: "",
        uf: "",
        cep: ""
    })

    const [termsChecked, setTermsChecked] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [markdownText, setMarkdownText] = useState("")
    const markdownURL = '/termosPoliticasDePrivacidade.md'


    useEffect(() => {
        fetch(markdownURL)
            .then(response => response.text())
            .then(text => setMarkdownText(text))
            .catch(error => console.error("Erro ao carregar arquivo Markdown:", error))
    }, [])

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const handleChange = async (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        if (name === 'cep' && value.length === 8) {
            await handleCepSearch(value)
        }

        if (name === 'email') {
            const isValidEmail = validateEmail(value)
            if (!isValidEmail) {
                setErrorMessage("Por favor, insira um email válido.")
            } else {
                setErrorMessage("")
            }
        }
    }

    const handleCheckboxChange = () => {
        setTermsChecked(prevState => !prevState)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isFormValid()) {
            return;
        }
        try {
            const response = await api.post("/users", formData)
            console.log("Novo usuário cadastrado:", response.data)
            navigate("/login")
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error)
        }
    }

    const isFormValid = () => {
        console.log('formData:',formData)
        if (!termsChecked) {
            setErrorMessage("Você deve concordar com os termos e políticas de privacidade.")
            return false
        }
        return true
    }

    const handleCepSearch = async (cepValue) => {
        try {
            const address = await cep(cepValue)
            setFormData({
                ...formData,
                neighborhood: address.neighborhood,
                uf: address.state,
                city: address.city,
                address: address.street,
                cep: address.cep
            })
        } catch (error) {
            console.error('Erro ao buscar endereço:', error)
        }
    }

    const validateEmail = (email) => {
        const regex = /\S+@\S+\.\S+/
        return regex.test(email)
    }

    return (
        <>
            <Navbar />

            <Toast show={!!errorMessage} delay={3000} autohide bg='warning' className='text-black' onClose={() => setErrorMessage("")}>
                <Toast.Body>{errorMessage}</Toast.Body>
            </Toast>

            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Termos e Políticas de Privacidade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MarkdownContent markdownText={markdownText} />
                </Modal.Body>
            </Modal>

            <div className={styles.cadastroContainer}>
                <div className={styles.cadastroLogo}>
                    <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
                </div>

                <div className={styles.cadastroTitulo}>
                    <p>Crie sua conta. É grátis!</p>
                    <div className={styles.cadastroSocialIcons}>
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

                <div className={styles.cadastroForm}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formColunas}>
                            <div className="form-colunas-colunas">
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Nome" required />
                                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" required />
                                <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="CPF" required />
                                <input type="text" name="cep" value={formData.cep} onChange={handleChange} placeholder="CEP" required />
                                <input type="text" name="neighborhood" value={formData.neighborhood} onChange={handleChange} placeholder="Bairro" readOnly />
                                <input type="text" name="uf" value={formData.uf} onChange={handleChange} placeholder="UF" readOnly />
                            </div>

                            <div className={styles.formColunasColunas}>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Sobrenome" required />
                                <input type="text" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" required />
                                <InputMask mask="(99) 99999-9999" value={formData.phone} onChange={handleChange}>
                                    {() => <input type="text" name="phone" placeholder="Telefone" required />}
                                </InputMask>
                                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Logradouro" readOnly />
                                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Cidade" readOnly />                                                              
                                <Form.Group style={{marginTop: '-10px', display: 'flex', cursor: 'pointer' }} controlId="formHorizontalCheck">
                                    <Col sm={{ span: 10, offset: 2 }} style={{marginTop: '8px'}}>
                                        <Form.Check 
                                            style={{fontSize: '18px'}} 
                                            label="Concordo com os Termos e Políticas de Privacidade" 
                                            onChange={handleCheckboxChange}
                                            checked={termsChecked}
                                        />
                                    </Col>
                                </Form.Group>
                            </div>
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
                
                <div className={styles.cadastroCadastro}>
                    <p>Já tem uma conta? 
                        <Link to="/login">
                            <span>Entre</span>
                        </Link>
                    </p>
                </div>

                <span onClick={toggleModal} style={{cursor: 'pointer', color: 'gray'}}>
                    Leia os <u>Termos e Políticas de Privacidade</u>
                </span>
            </div>

            <Footer />
        </>
    )
}

export default Cadastro