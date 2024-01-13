import { createContext, useState, useContext } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    newForm: 0,
    setUser: () => {},
    setToken: () => {},
    setNewForm: () =>{}
})

export const ContextProvider = ({children})=>{

    const [user, setUser] = useState({})
    
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"))
    const setToken = (token)=>{
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token)
        } else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    };

    const [newForm, setNewForm] = useState(false)

    return  <StateContext.Provider value={{user, token, newForm, setUser, setToken, setNewForm}}>{children}</StateContext.Provider>
}

export const useStateContext = () => {
    return useContext(StateContext);
};
  

