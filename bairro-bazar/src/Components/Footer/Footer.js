import React from "react";

import styles from '../../Styles/main.module.scss'

import Logo from '../../assets/logo-bairro-bazar.png'
import FacebookIcon from "../../assets/facebook-icon.png"
import InstagramIcon from "../../assets/instagram-icon.png"
import LinkedinIcon from "../../assets/linkedIn-icon.png"
import YoutubeIcon from "../../assets/youtube-icon.png"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerPages}>
                    <p>Ajuda</p>
                    <p>Dicas de segurança</p>
                    <p>Termos de uso</p>
                    <p>Políticas de privacidade</p>
                    <p>Propriedade intelectual</p>
                </div>
                <div className={styles.footerCopy}>
                    <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
                    <div className={styles.footerCopyText}>
                        <p>Bairro Bazar © 2024 - todos os direitos reservados - Bairro Bazar LTDA. CNPJ: 00.000.000/000-00</p>
                    </div>
                    <div className={styles.footerSocialMedias}>
                        <img style={{height: "60%"}} src={FacebookIcon} alt="Facebook"/>
                        <img style={{height: "60%"}} src={InstagramIcon} alt="Instagram"/>
                        <img style={{height: "60%"}} src={LinkedinIcon} alt="Linkedin"/>
                        <img style={{height: "60%"}} src={YoutubeIcon} alt="Youtube"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer