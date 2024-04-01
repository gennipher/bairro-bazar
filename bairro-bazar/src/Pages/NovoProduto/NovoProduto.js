import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import api from "../../Services/api"
import { UserContext } from "../../Context/UserContext";
import styles from '../../Styles/main.module.scss'

function NovoProduto() {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImageURL, setProductImageURL] = useState("");
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();


    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token)
    console.log(decoded)
    localStorage.setItem('userId', decoded.userId)
    const id = decoded.userId

    console.log('userData:', userData)

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    };

    const handleProductDescriptionChange = (e) => {
        setProductDescription(e.target.value);
    };

    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value);
    };

    const handleProductImageURLChange = (e) => {
        setProductImageURL(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userDataApi = await api.get(`/users/${id}`)
                setUserData(userDataApi.data)
                console.log(userData)

            const response = await api.post('/product', {
                sellerFirstName: userData.firstName,
                sellerLastName: userData.lastName,
                sellerCpf: userData.cpf,
                date: new Date(),
                neighborhood: userData.neighborhood,
                title: productName,
                description: productDescription,
                price: productPrice,
                image: productImageURL,
                phone: userDataApi.phone,
                active: true
            });

            setTimeout(() => {
                navigate('/home')
            }, 1000)   

            setProductName("");
            setProductDescription("");
            setProductPrice("");
            setProductImageURL("");                
        } catch (error) {
            console.error("Erro ao adicionar novo produto:", error);
        }
    };
    return (
        <>
            <section className={styles.novoProduto}>
                <form className={styles.novoProdutoForm} onSubmit={handleSubmit}>
                    <p>Adicionar Produto</p>
                    <div className={styles.novoProdutoFormInputs}>
                        <input 
                            type="text" 
                            placeholder="Nome do produto" 
                            value={productName} 
                            onChange={handleProductNameChange} 
                            required />
                        <textarea 
                            rows="4" 
                            placeholder="Descrição do produto" 
                            value={productDescription} 
                            onChange={handleProductDescriptionChange} 
                            required />
                        <input 
                            type="number" 
                            min="1" 
                            step="0.01" 
                            placeholder="Valor do produto" 
                            value={productPrice} 
                            onChange={handleProductPriceChange} 
                            required />
                        <input 
                            type="url" 
                            placeholder="URL da imagem do produto" 
                            value={productImageURL} 
                            onChange={handleProductImageURLChange} 
                            required />
                        <button type="submit">Adicionar Produto</button>
                    </div>
                </form>       
            </section>
        </>
    )
}

export default NovoProduto