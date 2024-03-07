import React from "react";

import Navbar from "../../Components/Navbar/Navbar"
import Card from "../../Components/Card/Card"
import MenuCard from "../../Components/MenuCard/MenuCard"

function Home() {
    return (
        <>
            <Navbar />

            <MenuCard />

            <section>
                <div className="categorias"> Mais Buscados</div>
            </section>

            <section className="product-section">
                <Card />   
                <Card />  
                <Card />    
                <Card />         
            </section>
        </>
        
    )
}

export default Home