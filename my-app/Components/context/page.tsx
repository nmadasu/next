'use client'
import React, { createContext, useContext, useState } from "react" 

// const AppContext=createContext<any>({
//     userName:'sanjeev'
// })
const AppContext=createContext<any>(undefined)
export function AppWrapper({children}:{
    children: React.ReactNode
}){
    let [stateData1,setStateData]=useState({
        // userName:'sanjeev',
        firstName: 'madasu',
        lastName: 'naga sanjeev',
        email: 'sanjeev@gmail.com',
        userName: 'sandy',
        password: 'sanjeev123',
        phoneNumber: '1231231231'
    })
    return(
        <AppContext.Provider value={{stateData1}}>
             {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}