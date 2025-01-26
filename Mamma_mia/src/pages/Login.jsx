import { useState } from "react"

const Login = () => {
    const [email, setMail] = useState("");
    const [pw, setPw] = useState("");
    const [error, setError] = useState (false);

    const validarInfo = (e)=>{
        e.preventDefault()
        if(!email.trim() || !pw.trim()){
            setError(true)
        }else{
            console.log("campos OK")
            setError(false)
            if(pw.length < 6){
                setError(true)
                return;
            }else{
                alert("Autenticado Satisfactoriamente")
                setError(false)
                console.log("confirmación CLAVES OK")
                setPw('')
                setMail('')
                return;
            }
        }
    } 

    return (
        <form className="container centrado" onSubmit={validarInfo}>
            <h2 className="fs-1">Login Usuario</h2>
            <article className="form-group">
                <label>Email:</label>
                <input className="form-control" type="text" onChange={(e)=> setMail(e.target.value)} value={email}/>
            </article>
            <article className="form-group">
                <label>Contraseña:</label>
                <input className="form-control" type="text" onChange={(e)=> setPw(e.target.value)} value={pw} />
                {error && pw.length < 6? <p className="error">password menor a 6 caracteres</p> :null}
            </article>
            <button className="btn btn-dark mt-3" type="submit">Validar</button>
            { error && (!email.trim() || !pw.trim())? <p className="error">Todos los campos son requeridos</p> :null}
        </form>
    )
}

export default Login