import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
/* import PizzaCard from "./PizzaCard"; */


const Pizza = () => {
    const { id } = useParams();
    const [Pizzas, setPizzas] = useState([])


    const getData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/pizzas/"+id);
            const data = await response.json();
            setPizzas(data)
        }
        catch (error) { console.log(error) }
    };

    useEffect(() => {
        getData()
    }, []
    )

    return (
        <article className="container mt-5" style={{ display: "block",}}>
            <h1>La Pizza {Pizzas.name}</h1>
            <h4 className="mb-4">Precio: {Pizzas.price}</h4>
            <img src={Pizzas.img} alt="" style={{ width: "500px", borderRadius: "10px" }} />

            {/* <h5 className="mt-2">Sus Ingredientes son:</h5>
            {/* <p>🍕 {
                Pizzas.ingredients.map((ingred, recorrido) => (
                    <span key={ingred}>{ingred}{recorrido < Pizzas.ingredients.length - 1 && ", "}</span>))
            }
            </p> */}
            <p className="mt-3">{Pizzas.desc}</p>
            <div style={{ display: "flex", gap: "1rem"}}>
                <button className='add' style={{borderRadius:"5px"}}>Añadir 🛒</button>
                <Link to="/"><button className="ver-mas" style={{borderRadius:"5px"}}>🍕 Volver a Mamma Mia</button></Link>
            </div>
            
        </article>
    )
}

export default Pizza