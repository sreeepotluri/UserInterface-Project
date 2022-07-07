import { createContext, useState } from 'react';

const userContext = createContext();

export function UserProvider({children}) {

    const [ user, setUser ] = useState({
        firstname: "", //pavan sreenivas
        lastname: "", //potluri
        username: "", //sreeepotluri
        password: "", //pancakes
        password2:"", //icecreams
        authenticated: false
    })

     const updateUser = (name,value) => {
        setUser({...user, [name]: value})
     }

     return(
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
     )
 
}

export default UserContext;