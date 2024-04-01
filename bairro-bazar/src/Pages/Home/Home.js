import React, { useState, useEffect, useContext  } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Context/UserContext"
import Card from "../../Components/Card/Card"
import MenuCard from "../../Components/MenuCard/MenuCard"
import api from "../../Services/api"
import SearchBar from "../../Components/SearchBar/SearchBar"
import styles from "../../Styles/main.module.scss"

function Home() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [userData] = useContext(UserContext)
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            if (!userData.isLogged) {
                navigate("/login")
                return
            }

            const response = await api.get("/product")
            setProducts(response.data)
          } catch (error) {
            console.error("Erro ao carregar os produtos:", error)
          }
        };
    
        fetchProducts();
    }, [userData.isLogged, navigate])

    const handleDeleteCard = (productId) => {
        setProducts(products.filter(product => product._id !== productId))
    }

    useEffect(() => {
        const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredProducts(filtered)
      }, [searchTerm, products])

      const handleSearch = (term) => {
        setSearchTerm(term);
      }

    return (
        <>
            <MenuCard />

            <SearchBar onSearch={handleSearch} />

            <section>
                <div className={styles.categorias}>Adicionados Recentemente</div>
            </section>
            
            <section className={styles.productSection}>
                {filteredProducts.map((product) => (
                    <Card
                        key={product._id}
                        productId={product._id}
                        title={product.title}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        onDelete={handleDeleteCard}
                    />
                ))}
            </section>
        </>
    )
}

export default Home