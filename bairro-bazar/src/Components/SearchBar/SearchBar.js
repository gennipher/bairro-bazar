import React, { useState } from "react"
import Lupa from '../../assets/lupa.png'
import styles from '../../Styles/main.module.scss'
import { Form, InputGroup } from "react-bootstrap"


function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };
  return (
    <>
        <div style={{ display: "flex", justifyContent: "center"}}>
            <Form className={styles.navInputPesquisar} style={{ minWidth: "60px"}}>            
                <InputGroup className="mb-2">                
                    <Form.Control 
                        className={styles.navInputPesquisarInput} 
                        type="text" 
                        placeholder="Pesquisar"
                        onChange={handleChange}
                    />
                    <InputGroup.Text>
                        <img type="submit" src={Lupa} alt="lupa-pesqusiar"/>
                    </InputGroup.Text>
                </InputGroup>
            </Form>
        </div>
    </>
  )
}

export default SearchBar;
