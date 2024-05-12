'use client'
import { createContext, useState } from "react";


export const GlobalContext=createContext();


const GlobalContextProvider=({children})=>{
    const [CompSymbol,setCompSymbol]=useState("INFY")
    const [CompName,setCompName]=useState("Infosys")
    return(
        <GlobalContext.Provider value={{CompSymbol,setCompSymbol,CompName,setCompName}}>
{children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider