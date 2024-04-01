import React from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import ArtigosInfantis from '../../assets/artigos-infantis.png'
import AutosPecas from '../../assets/autos-pecas.png'
import CasaDecoracao from '../../assets/casa-decoracao.png'
import EletronicosCelulares from '../../assets/eletronicos-celulares.png'
import EsporteLazer from '../../assets/esporte-lazer.png'
import ModaBeleza from '../../assets/moda-beleza.png'
import MusicasHobbies from '../../assets/musicas-hobbies.png'
import ServicosVagas from '../../assets/servicos-vagas.png'
import styles from '../../Styles/main.module.scss'

function MenuCard() {
    const tooltipText = "Em breve";

    return (
        <section className={styles.inputSection}>
            <div className={styles.menuCard}>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>{tooltipText}</Tooltip>}
                >
                    <div className={styles.cards}>
                        <img src={ArtigosInfantis} alt="artigos-infantis"/>
                        <p className={styles.menuCardText}>Artigos Infantis</p>
                    </div>
                </OverlayTrigger>
                
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>{tooltipText}</Tooltip>}
                >
                    <div className={styles.cards}>
                        <img src={AutosPecas} alt=""/>
                        <p className={styles.menuCardText}>Autos e Peças</p>
                    </div>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>{tooltipText}</Tooltip>}
                >
                    <div className={styles.cards}>
                        <img src={CasaDecoracao} alt=""/>
                        <p className={styles.menuCardText}>Casa e Decoração</p>
                    </div>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>{tooltipText}</Tooltip>}
                >
                    <div className={styles.cards}>
                        <img src={EletronicosCelulares} alt=""/>
                        <p className={styles.menuCardText}>Eletrônicos e Celulares</p>
                    </div>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>{tooltipText}</Tooltip>}
                >
                    <div className={styles.cards}>
                        <img src={EsporteLazer} alt=""/>
                        <p className={styles.menuCardText}>Esporte e Lazer</p>
                    </div>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>{tooltipText}</Tooltip>}
                >
                    <div className={styles.cards}>
                        <img src={ModaBeleza} alt=""/>
                        <p className={styles.menuCardText}>Moda e Beleza</p>
                    </div>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>{tooltipText}</Tooltip>}
                >
                    <div className={styles.cards}>
                        <img src={MusicasHobbies} alt=""/>
                        <p className={styles.menuCardText}>Músicas e Hobbies</p>
                    </div>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>{tooltipText}</Tooltip>}
                >
                    <div className={styles.cards}>
                        <img src={ServicosVagas} alt=""/>
                        <p className={styles.menuCardText}>Serviços e Vagas</p>
                    </div>
                </OverlayTrigger>
            </div>
        </section>
    )
}

export default MenuCard