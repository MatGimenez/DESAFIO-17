import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Login = () => {
    const [email, setMail] = useState("");
    const [pw, setPw] = useState("");
    const [error, setError] = useState(false);
    const { login } = useContext(UserContext);
    const navigate = useNavigate();


    const validarInfo = async (e) => {
        e.preventDefault()
        if (!email.trim() || !pw.trim()) {
            setError(true)
        } else {
            console.log("campos OK")
            setError(false)
            if (pw.length < 6) {
                setError(true)
                return;
            } else {
                /* alert("Autenticado Satisfactoriamente") */
                setError(false)
                console.log("confirmación CLAVES OK")
                setPw('')
                setMail('')
                return;
            }
        }
        login(email, pw);
        navigate("/");
    }

    return (
        <form className="container centrado" onSubmit={validarInfo}>
            <h2 className="fs-1">Login Usuario</h2>
            <article className="form-group">
                <label>Email:</label>
                <input className="form-control" type="email" onChange={(e) => setMail(e.target.value)} value={email} placeholder="Ingrese su Email"/>
            </article>
            <article className="form-group">
                <label>Contraseña:</label>
                <input className="form-control" type="password" onChange={(e) => setPw(e.target.value)} value={pw} placeholder="Ingrese su Contraseña"/>
                {error && pw.length < 6 ? <p className="error">password menor a 6 caracteres</p> : null}
            </article>
            <button className="btn btn-dark mt-3" type="submit">Validar</button>
            {error && (!email.trim() || !pw.trim()) ? <p className="error">Todos los campos son requeridos</p> : null}
        </form>
    )
}

export default Login;