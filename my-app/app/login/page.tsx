"use client"

import { useState } from "react"
import { logIn,logOut } from "@/Redux/feature/authSlice"
import { UseDispatch, useDispatch } from "react-redux"
import { AppDispatch } from "@/Redux/store"
// import { AppDispatch } from "@/Redux/store"
import { useRouter } from 'next/navigation';

export default function LogIn(){
    const [userName,setUserName]=useState('')
    const router = useRouter();
    const dispatch=useDispatch<AppDispatch>()

    const onClickLogiIn=()=>{    
        dispatch(logIn(userName))
        router.push('/dashboard')
    }

    const onClickToggle=()=>{}
    const onClickLogOut=()=>{}

    return (
        <div>
            <input type='text' onChange={(e)=>setUserName(e.target.value)}></input>
            <br/><br/>
            <button onClick={onClickLogiIn}>Log In</button>
            <br/><br/>
            <button>Log Out</button>
            <br/><br/>
            <button>Toggle Moderate Status</button>
        </div>
    )
}