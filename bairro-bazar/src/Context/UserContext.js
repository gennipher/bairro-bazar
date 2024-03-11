import React, { createContext, useState } from "react";

export const UserContext = createContext()

export function UserProvider(props) {

    const [userData, setUserData] = useState({
        isLogged: true,
        message: 'Olá'
    })

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    )
}