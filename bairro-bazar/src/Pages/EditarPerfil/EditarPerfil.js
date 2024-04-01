import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"
import InputMask from 'react-input-mask'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'
import styles from '../../Styles/main.module.scss'
import api from "../../Services/api"
import cep from 'cep-promise'

function EditarPerfil() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({})
    const [originalUserData, setOriginalUserData] = useState({})
    const [showToast, setShowToast] = useState(false)
    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token)
    const id = decoded.userId
    localStorage.setItem('userId', decoded.userId)

    useEffect(() => {
        const fetchUserData = async () => {
            try {                
                const response = await api.get(`/users/${id}`)
                setUserData(prevUserData => {
                    setOriginalUserData(prevUserData)
                    return response.data
                });
            } catch (error) {
                console.error("Erro ao obter dados do usuário:", error)
            }
        }

        fetchUserData()
    }, [id])

    const handleChange = async (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })

        if (name === 'cep' && value.length === 8) {
                await handleCepSearch(value);
            }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedData = {};
            for (const key in userData) {
                if (userData[key] !== originalUserData[key]) {
                    updatedData[key] = userData[key]
                }
            }
            await api.put(`/users/${id}`, updatedData)
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false)
                navigate('/home')
            }, 3000)            
        } catch (error) {
            console.error("Erro ao atualizar perfil:", error)
        }
    }

    const handleCepSearch = async (cepValue) => {
        try {
            const address = await cep(cepValue)
            setUserData({
                ...userData,
                neighborhood: address.neighborhood,
                uf: address.state,
                city: address.city,
                address: address.street,
                cep: address.cep
            });
        } catch (error) {
            console.error('Erro ao buscar endereço:', error)
        }
    }

    return (
        <>
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide bg='success' className='text-white' >
                <Toast.Body>Perfil atualizado com sucesso!</Toast.Body>
            </Toast>

            <section className={styles.editarPerfilSection}>
                
                <h2>Editar Perfil</h2>

                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Nome</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="firstName" value={userData.firstName} onChange={handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Sobrenome</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="lastName" value={userData.lastName} onChange={handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Email</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" name="email" value={userData.email} onChange={handleChange} disabled />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>Password</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password"  />
                        </Col>
                    </Form.Group>
            
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>CPF</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="cpf" value={userData.cpf} onChange={handleChange} disabled />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Telefone</Form.Label>
                        <Col sm={10}>
                            <InputMask mask="(99) 99999-9999" value={userData.phone} onChange={handleChange}>
                                {() => <Form.Control type="text" name="phone" value={userData.phone} onChange={handleChange} />}
                            </InputMask>
                            
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>CEP</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="cep" value={userData.cep} onChange={handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Logradouro</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="address" value={userData.address} onChange={handleChange} disabled />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Bairro</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="neighborhood" value={userData.neighborhood} onChange={handleChange} disabled />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Cidade</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="city" value={userData.city} onChange={handleChange} disabled />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>UF</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="uf" value={userData.uf} onChange={handleChange} disabled />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Salvar</Button>
                        </Col>
                    </Form.Group>
                </Form>   
            </section>
        </>
    )
}

export default EditarPerfil