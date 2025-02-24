import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [user, setUser] = useState(null);

    //Funcion de LOGIN para acceder
    const login = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                

            });
            console.log("Login funciona")
            const data = await response.json();
            alert(data?.error || "Authenticacion satisfactoria!");
            setToken(data.token);
            setUser({ email });
            localStorage.setItem("token", data.token);
        } catch (error) {
            console.log(error);
        }
    };

    //Funcion de REGISTER para registrarse
    const register = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (data.token) {
                setToken(data.token)
                setUser({ email })
                localStorage.setItem("token", data.token);
            }
        } catch (error) {
            console.log(error);
        }
    };

    //Funcion de LOGOUT para salir y borrar token
    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
    };

    //Funcion de FETCH para obtener el perfil
    const profile = async () => {
        useEffect(() => {
            if (token) {
                fetch("http://localhost:5000/api/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then((response) => response.json())
                    .then((data) => setUser(data));
            }
        }, [token]);
    }



return (
    <UserContext.Provider value={{ user, login, register, logout, token, setToken, profile }}>
        {children}
    </UserContext.Provider>
    );
};

export default UserProvider;