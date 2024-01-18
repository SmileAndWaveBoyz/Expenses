import { createContext, useState, useContext } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    newForm: 0,
    refresh: false,
    editPage: false,
    setUser: () => {},
    setToken: () => {},
    setNewForm: () =>{},
    setRefresh: () => {},
    setEditPage: () => {}
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
    const [editPage, setEditPage] = useState(false)
    const [refresh, setRefresh] = useState(false)

    return  <StateContext.Provider value={{user, token, newForm, refresh, editPage, setUser, setToken, setNewForm, setRefresh, setEditPage}}>{children}</StateContext.Provider>
}

export const useStateContext = () => {
    return useContext(StateContext);
};
  

