import React from "react";

import ArtigosInfantis from '../../assets/artigos-infantis.png'
import AutosPecas from '../../assets/autos-pecas.png'
import CasaDecoracao from '../../assets/casa-decoracao.png'
import EletronicosCelulares from '../../assets/eletronicos-celulares.png'
import EsporteLazer from '../../assets/esporte-lazer.png'
import ModaBeleza from '../../assets/moda-beleza.png'
import MusicasHobbies from '../../assets/musicas-hobbies.png'
import ServicosVagas from '../../assets/servicos-vagas.png'

function MenuCard() {
    return (
        <section className="input-section">
            <div className="menu-card">
                <div className="cards">
                    <img src={ArtigosInfantis} alt=""/>
                    <p className="manu-card-text">Artigos Infantis</p>
                </div>
                <div className="cards">
                    <img src={AutosPecas} alt=""/>
                    <p className="manu-card-text">Autos e Peças</p>
                </div>
                <div className="cards">
                    <img src={CasaDecoracao} alt=""/>
                    <p className="manu-card-text">Casa e Decoração</p>
                </div>
                <div className="cards">
                    <img src={EletronicosCelulares} alt=""/>
                    <p className="manu-card-text">Eletrônicos e Celulares</p>
                </div>
                <div className="cards">
                    <img src={EsporteLazer} alt=""/>
                    <p className="manu-card-text">Esporte e Lazer</p>
                </div>
                <div className="cards">
                    <img src={ModaBeleza} alt=""/>
                    <p className="manu-card-text">Moda e Beleza</p>
                </div>
                <div className="cards">
                    <img src={MusicasHobbies} alt=""/>
                    <p className="manu-card-text">Músicas e Hobbies</p>
                </div>
                <div className="cards">
                    <img src={ServicosVagas} alt=""/>
                    <p className="manu-card-text">Serviços e Vagas</p>
                </div>
            </div>
        </section>
        
    )
}

export default MenuCard