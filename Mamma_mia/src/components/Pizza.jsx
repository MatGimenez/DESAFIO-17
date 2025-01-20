import { useEffect, useState } from "react";
import PizzaCard from "./PizzaCard";


const Pizza = () => {
    const [Pizzases, setPizzas] = useState([])

    const getData = async () => {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizzas(data)
    };

    useEffect(()=> {
        getData()
    },[]
    )

    return (
        <article className="container mt-5" style={{ display:"block"}}>
            <h1>La Pizza {Pizzases.name}</h1>
            <h4 className="mb-4">Precio: {Pizzases.price.toLocaleString("es-Cl")}</h4>
            <img src={Pizzases.img} alt="" style={{width:"500px", borderRadius:"10px"}} />
            
            <h5 className="mt-2">Sus Ingredientes son:</h5>
            <p>🍕 {
                Pizzases.ingredients.map((ingred, recorrido) => (
                    <span key={ingred}>{ingred}{recorrido < Pizzases.ingredients.length - 1 && ", "}</span>))
                }
            </p>
            <p className="mt-5">{Pizzases.desc}</p>
        </article>
    )
}

export default Pizza