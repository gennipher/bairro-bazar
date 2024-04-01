import React, { createContext, useState } from "react"

export const UserContext = createContext()

export function UserProvider(props) {
    const storedUserData = JSON.parse(localStorage.getItem("userData"))

    const [userData, setUserData] = useState(storedUserData || {
        isLogged: false,
        email: "",
        firstName: "",
        lastName: "",
        neighborhood: ""
    })

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    )
}