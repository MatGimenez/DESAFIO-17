import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
const usuario = {
    id: "1",
    email: "desafio@latam.com",
    password: "123456",
    }

const Profile = () => {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className='container m-5' style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h2>Bienvenido:</h2>
                <p className='fs-3'>{usuario.email}</p>
                <br />
                <Link to="/"><button className="add" style={{borderRadius:"5px"}}>🍕 Cerrar Sesión</button></Link>
            </div>
        </>

    )
}

export default Profile