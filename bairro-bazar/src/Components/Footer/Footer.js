import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Logo from '../../assets/logo-bairro-bazar.png'
import FacebookIcon from "../../assets/facebook-icon.png"
import InstagramIcon from "../../assets/instagram-icon.png"
import LinkedinIcon from "../../assets/linkedIn-icon.png"
import YoutubeIcon from "../../assets/youtube-icon.png"
import styles from '../../Styles/main.module.scss'

function Footer() {
    const tooltipText = "Em breve";
    const tooltipTextSocial = "@bairrobazar"

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerPages}>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip>{tooltipText}</Tooltip>}
                    >
                        <p>Ajuda</p>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip>{tooltipText}</Tooltip>}
                    >
                        <p>Dicas de segurança</p>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip>{tooltipText}</Tooltip>}
                    >
                        <p>Termos de uso</p>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip>{tooltipText}</Tooltip>}
                    >
                        <p>Políticas de privacidade</p>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip>{tooltipText}</Tooltip>}
                    >
                        <p>Propriedade intelectual</p>
                    </OverlayTrigger>
                </div>
                <div className={styles.footerCopy}>
                    <img style={{height: "60%"}} src={Logo} alt="Logo Bairro Bazar"/>
                    <div className={styles.footerCopyText}>
                        <p>Bairro Bazar © 2024 - todos os direitos reservados - Bairro Bazar LTDA. CNPJ: 00.000.000/000-00</p>
                    </div>
                    <div className={styles.footerSocialMedias}>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>{tooltipTextSocial}</Tooltip>}
                        >
                            <img style={{height: "60%"}} src={FacebookIcon} alt="Facebook"/>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>{tooltipTextSocial}</Tooltip>}
                        >
                            <img style={{height: "60%"}} src={InstagramIcon} alt="Instagram"/>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>{tooltipTextSocial}</Tooltip>}
                        >
                            <img style={{height: "60%"}} src={LinkedinIcon} alt="Linkedin"/>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>{tooltipTextSocial}</Tooltip>}
                        >
                            <img style={{height: "60%"}} src={YoutubeIcon} alt="Youtube"/>
                        </OverlayTrigger>
                        
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer