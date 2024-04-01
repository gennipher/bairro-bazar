import React, { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import styles from '../../Styles/main.module.scss'
import api from "../../Services/api"

function Card({ productId, title, image, description, price, onDelete }) {
    const [userPhone, setUserPhone] = useState("")
    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token)
    localStorage.setItem('userId', decoded.userId)
    const id = decoded.userId

    useEffect(() => {
        const fetchUserPhone = async () => {
            try {
                const response = await api.get(`/users/${id}`)
                setUserPhone(response.data.phone)
            } catch (error) {
                console.error("Erro ao obter o número de telefone do usuário:", error)
            }
        };

        fetchUserPhone()
    }, [id])

    const formatPhoneNumberForWhatsApp = (phoneNumber) => {
        const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '')
        const internationalPhoneNumber = `+55${cleanedPhoneNumber}`
        return `https://wa.me/${internationalPhoneNumber}?text=Olá! Tenho interesse no produto "${title}" listado no Bairro Bazar. Poderia me fornecer mais informações?`
    }

    const handleMakeProposal = () => {
        if (userPhone) {
            const whatsappURL = formatPhoneNumberForWhatsApp(userPhone)
            window.open(whatsappURL, '_blank')
        } else {
            alert('Número de telefone indisponível. Por favor, adicione um número de telefone em seu perfil.')
        }
    }

    const handleDeleteCard = async () => {
        try {
            await api.delete(`/product/${productId}`)
            onDelete(productId)
        } catch (error) {
            console.error("Erro ao deletar o card do produto:", error)
        }
    }

    return (
        <div className={styles.productCard}>
            <div>
                <div className={styles.produtoTitulo}>
                    <p>{title}</p>
                    <span className="material-symbols-outlined" onClick={handleDeleteCard}>delete</span>
                </div>
                <img src={image} alt={title} />
                <p className={styles.produtoDescricao}>{description}</p>
                <p className={styles.produtoPreco}>R$ {price},00</p>
            </div>
            <div className={styles.divFazerProposta} onClick={handleMakeProposal}>
                <span>Fazer Proposta</span>
            </div>
        </div>
    )
}

export default Card