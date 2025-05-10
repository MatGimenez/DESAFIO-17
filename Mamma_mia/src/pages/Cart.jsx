import { useState } from "react";
import { pizzaCart } from "../assets/pizzas";
const carritoInicial = [pizzaCart[0],pizzaCart[1],pizzaCart[2]]

const Cart = () => {
    const [carrito, setCarrito] = useState(carritoInicial)


    const sumar =(evento, pizzaId)=>{
        console.log("sumando")
        setCarrito(carrito.map((item) => item.id === pizzaId ? {...item, count: item.count + 1}:item))
    }

    const restar =(evento, pizzaId)=>{
        console.log("restando")
        setCarrito(carrito.map((item) => item.id === pizzaId && item.count > 0? {...item, count: item.count -1}:item).filter((item) => item.count > 0))
    }

    return (
        <article className="container" style={{display:"flex", flexDirection:"column"}}>
            <h2>Detalles del Pedido:</h2>
            <ul style={{margin:"0", padding:"0"}}>
                {carrito.map(pizza => 
                    <li key={pizza.id} style={{display:"flex", gap:"2rem", margin:"1rem", alignItems:"center"}}>
                        <img src={pizza.img} alt="foto pizzas" style={{width:"200px"}}/>
                        <p style={{width:"25%", margin:"0"}}>Pizza {pizza.name}</p>
                        <h5>${pizza.price.toLocaleString("es-CL")}</h5>
                        <button className="ver-mas" style={{borderRadius:"5px"}} onClick={(e)=> restar(e,pizza.id)}>Quitar</button>
                        <p style={{margin:"0"}}> {pizza.count}</p>
                        <button className="add" style={{borderRadius:"5px"}} onClick={(e)=> sumar(e,pizza.id)}>Agregar</button>       
                    </li>
                )}
            </ul>
            <div>
                <button className="add" style={{borderRadius:"5px"}}>Pagar</button>
                <h4>Total: {carrito.reduce((subtotal, currentValue) => subtotal + currentValue.price * currentValue.count, 0).toLocaleString("es-CL")}</h4>
            </div>
            
        </article>
    )
}

export default Cart