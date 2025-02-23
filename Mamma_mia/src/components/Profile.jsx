import { Link } from 'react-router-dom'
import Header from './Header'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
/* const usuario = {
    id: "1",
    email: "desafio@latam.com",
    password: "123456",
    } */

const Profile = () => {
    /* const [usuario, setUsuario] = useState(null); */
    const { usuario, Logout, Profile } = useContext(UserContext);
    Profile()

    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className='container m-5' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h2>Bienvenido:</h2>
                <p className='fs-3'>{usuario.email}</p>
                <br />
                <Link to="/"><button className="add" style={{ borderRadius: "5px" }} onClick={Logout}>🍕 Cerrar Sesión</button></Link>
            </div>
        </>

    )
}

export default Profile