import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// this is kinda a mechanism to protect the authentication pages/routes
//acts like a protective container and helps in displaying whats needed via conditional rendering
//will be useful and understand this when we setup routing


//name of file and function is diff just to follow the tutorial
export default function Protected({children,authentication=true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    //even tho we have taken authentication as checkmark, #NO TRUST
    //we make this as if the user tryna break in
    //hence ask the store for status of user
    const authStatus = useSelector(state=>state.auth.status)

    //this useEffect is to tell where to send/navigate the user, and based upon which fields(dependencies) to redirect
    // navigate is dependency coz if user does dome voodoo shit wrt navigating here n there, redirect them as per logic
    useEffect(()=>{
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authentication])
        
    if (authentication) {
        
    }

  return loader ? (<h1>loading...</h1>) : (<>{children}</>)
}

