import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo-bairro-bazar.png'
import GoogleIcon from '../../assets/google-icon.png'
import FacebookPinkIcon from '../../assets/facebook-icon-pink.png'
import api from "../../Services/api";
import styles from "../../Styles/cadastro.module.scss"

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
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/users", formData);
            console.log("Novo usuário cadastrado:", response.data);
            navigate("/login");
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
        }
    };

    return (
        <>
            <div className={styles.cadastroContainer}>
                <div className={styles.cadastroLogo}>
                    <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
                </div>
                <div className={styles.cadastroTitulo}>
                    <p>Crie sua conta. É grátis!</p>
                    <div className={styles.cadastroSocialIcons}>
                        <img style={{height: "60%"}} src={GoogleIcon} alt="Logo Google"/>
                        <img style={{height: "60%"}} src={FacebookPinkIcon} alt="Logo Facebook"/>
                    </div>
                </div>
                <div className={styles.cadastroForm}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formColunas}>
                            <div className="form-colunas-colunas">
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Nome" />
                                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" />
                                <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="CPF" />
                                <input type="text" name="cep" value={formData.cep} onChange={handleChange} placeholder="CEP" />
                                <input type="text" name="neighborhood" value={formData.neighborhood} onChange={handleChange} placeholder="Bairro" />
                                <input type="text" name="uf" value={formData.uf} onChange={handleChange} placeholder="UF" />
                            </div>
                            <div className={styles.formColunasColunas}>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Sobrenome" />
                                <input type="text" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" />
                                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefone" />
                                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Logradouro" />
                                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Cidade" />
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
            </div>
        </>
    )
}

export default Cadastro