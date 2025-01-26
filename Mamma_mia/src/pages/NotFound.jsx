import { Link } from "react-router-dom"
const NotFound = () => {
    return (
        <div>
            <div className="container" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"80vh"}}>
                <div>
                <img src="../../src/assets/icono-pizza-404-3.jpg" alt="Error 404" style={{width:"600px"}}/>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <h2 className="fw-semibold">Te equivocaste de Pizza-Página 😥</h2>
                    <br />
                    <Link to="/"><button className="ver-mas" style={{borderRadius:"5px"}}>🍕 Volver a Nostra Mamma</button></Link>
                </div>
            </div>

        </div>
    )
}

export default NotFound