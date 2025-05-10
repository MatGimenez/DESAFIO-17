
import { pizzas } from "../assets/pizzas";
import PizzaCard from "./PizzaCard";

const CatalogoPizzas = () => {
    const pizzasE = (pizzas)
    return (
        <article className="container">
            {pizzasE.map(pizza => <PizzaCard 
                            img={pizza.img}
                            name={pizza.name}
                            ingredients={pizza.ingredients}
                            price={pizza.price}
                            key={pizza.id}/>)
            }
        </article>
    )
}

export default CatalogoPizzas