import React from 'react'
import authService from '../../appwrite/Auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn({className}) {
    //for user to logout, we havr to actually logout them via BaaS using the auth services(it returns a promise)
    //and then we havr to tell te store too, hence dispatch logut
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutuser = () => {
        authService.logout().then(() => { dispatch(logout()) }).then(()=>{ navigate('/')})
        
    }

    return (
        <button className={`'rounded-lg p-2 px-4' ${className}`} onClick={logoutuser}>Logout</button>
    )

}

export default LogoutBtn