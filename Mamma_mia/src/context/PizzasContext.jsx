import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
    const [pizza, setPizza] = useState([]);
const getData = async () => {
        try{
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizza(data)
        console.log(setPizza)
        }
        catch(error){console.log(error)}
    };

    useEffect(() => {
        getData()
    }, []
    )

    
    return (
        <PizzasContext.Provider value={{ pizza, setPizza }}>
            {children}
        </PizzasContext.Provider>
    );
};
export default PizzasProvider;