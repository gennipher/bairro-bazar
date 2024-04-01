import React, { useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode"
import Card from "../../Components/Card/Card"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import api from "../../Services/api"
import styles from '../../Styles/main.module.scss'

function MeusAnuncios() {
    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token)
    const userId = decoded.userId
    const [userProducts, setUserProducts] = useState([])
    const [userData, setUserData] = useState({})
    const [userEmail, setUserEmail] = useState({})

    useEffect(() => {
        const fetchUserData = async () => {
            try {            
                const response = await api.get(`/users/${userId}`)
                setUserData(response.data)
                setUserEmail(userData.email)
            } catch (error) {
                console.error("Erro ao obter dados do usuário:", error)
            }
        }

        fetchUserData()              
    }, [userId])

    useEffect(() => {
        if (userEmail) {
            const fetchUserProducts = async () => {
                try {
                    const response = await api.get(`/product/${userEmail}`)
                    setUserProducts(response.data)
                    console.log('userProducts:', userProducts)
                } catch (error) {
                    console.error("Erro ao buscar os produtos do usuário:", error)
                }
            }

            fetchUserProducts()
        }
    }, [userEmail])

    return (
        <section className={styles.meusAnunciosSection}>
            <h2>Meus Anúncios</h2>
            <p>Em breve você poderá editar seus produtos</p>
            <div className={styles.productSection}>
                {userProducts.map((product) => (
                    <div key={product._id}>
                        <Card
                            title={product.title}
                            image={product.image}
                            description={product.description}
                            price={product.price}
                        />
                        <Button >Editar</Button>
                    </div>
                ))}
            </div>
            
            <Modal >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Produto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                            
                            />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                            />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                            />
                        </Form.Group>
                        <Form.Group controlId="formImage">
                            <Form.Label>Imagem</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >
                        Fechar
                    </Button>
                    <Button variant="primary" >
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default MeusAnuncios;