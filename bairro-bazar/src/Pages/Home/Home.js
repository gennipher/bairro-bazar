import React from "react";

import Navbar from "../../Components/Navbar/Navbar"
import Card from "../../Components/Card/Card"
import MenuCard from "../../Components/MenuCard/MenuCard"

import styles from "../../Styles/main.module.scss"

function Home() {
    return (
        <>
            <Navbar />

            <MenuCard />

            <section>
                <div className={styles.categorias}> Mais Buscados</div>
            </section>

            <section className={styles.productSection}>
                <Card />   
                <Card />  
                <Card />    
                <Card />         
            </section>
        </>
        
    )
}

export default Home