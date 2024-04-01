import React, { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Suporte() {
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email:", email)
        console.log("Mensagem:", mensagem)
        setEmail("")
        setMensagem("")
    }

    return (
        <>
            <h2 style={{ margin: "25px"}}>Suporte</h2>
            <p style={{ margin: "25px"}}>Entre em contato conosco para obter assistência. Estamos aqui para ajudar!</p>
            
            <Row style={{ margin: "20px 10px"}}>
                <Col md={6} >
                    <h4>Informações de Contato</h4>
                    <p style={{ marginTop: "20px"}}>Email: suporte@bairrobazar.com</p>
                    <p>Telefone: (21) 1234-5678</p>
                    <p>Horário de Atendimento: Seg-Sex, 9h-18h</p>
                </Col>
            </Row>

            <Row style={{ margin: "10px"}}>
                <Col md={6}>
                    <h4>Envie uma Mensagem</h4>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{ marginTop: "20px"}}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicMessage">
                            <Form.Label style={{ marginTop: "20px"}}>Mensagem</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Digite sua mensagem"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button style={{ margin: "20px 0"}} variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Suporte