
/* import { pizzaCart } from "../assets/pizzas"; */
/* const carritoInicial = [pizzaCart[0],pizzaCart[1],pizzaCart[2]] */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const {cart, setCart} = useContext(CartContext);
    /* const [carrito, setCarrito] = useState(carritoInicial) */


    const sumar =(evento, pizzaId)=>{
        console.log("sumando")
        setCart(cart.map((item) => item.id === pizzaId ? {...item, count: item.count + 1}:item))
    }

    const restar =(evento, pizzaId)=>{
        console.log("restando")
        setCart(cart.map((item) => item.id === pizzaId && item.count > 0? {...item, count: item.count -1}:item).filter((item) => item.count > 0))
    }

    return (
        <article className="container" style={{display:"flex", flexDirection:"column"}}>
            <h2>Detalles del Pedido:</h2>
            <ul style={{margin:"0", padding:"0"}}>
                {cart.map(pizza => 
                    <li key={pizza.id} style={{display:"flex", gap:"2rem", margin:"1rem", alignItems:"center"}}>
                        <img src={pizza.img} alt="foto pizzas" style={{width:"200px", borderRadius:"5px"}}/>
                        <div style={{width:"25%"}}>
                            <p style={{margin:"0", fontWeight:"650"}}>Pizza {pizza.name}</p>
                            {
                                pizza.ingredients.map((ingred, recorrido) => (
                                    <span key={ingred} style={{fontSize:"12px", color:"gray"}}>{ingred}{recorrido < pizza.ingredients.length - 1 && ", "}</span>
                                ))
                            }
                        </div>
                        <h5>${pizza.price.toLocaleString("es-CL")}</h5>
                        <button className="ver-mas" style={{borderRadius:"5px"}} onClick={(e)=> restar(e,pizza.id)}>Quitar</button>
                        <p style={{margin:"0"}}> {pizza.count}</p>
                        <button className="add" style={{borderRadius:"5px"}} onClick={(e)=> sumar(e,pizza.id)}>Agregar</button>       
                    </li>
                )}
            </ul>
            <div className="container" style={{display:"flex", justifyContent:"flex-start", gap:"10px"}}>
                <button className="add" style={{borderRadius:"5px"}}>Pagar</button>
                <h4>Total: {cart.reduce((subtotal, currentValue) => subtotal + currentValue.price * currentValue.count, 0).toLocaleString("es-CL")}</h4>
            </div>
            
        </article>
    )
}

export default Cart