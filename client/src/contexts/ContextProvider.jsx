import { createContext, useState, useContext } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    newForm: 0,
    refresh: false,
    setUser: () => {},
    setToken: () => {},
    setNewForm: () =>{},
    setRefresh: () => {}
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
    const [refresh, setRefresh] = useState(false)

    return  <StateContext.Provider value={{user, token, newForm, refresh, setUser, setToken, setNewForm, setRefresh}}>{children}</StateContext.Provider>
}

export const useStateContext = () => {
    return useContext(StateContext);
};
  

