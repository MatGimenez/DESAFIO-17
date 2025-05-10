import Header from "../components/Header"
import '../Header.css'
/* import CardPizza from "./CardPizza" */
import '../Cards.css'
/* import CatalogoPizzas from "./CatalogoPizzas" */
import { useEffect, useState } from "react"
import PizzaCard from "../components/PizzaCard";

const Home = () => {
    const [Pizzas, setPizzas] = useState([])

    const getData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/pizzas");
            const data = await response.json();
            setPizzas(data);
        }
        catch (error) { console.log(error) }

    };

    useEffect(() => {
        getData()
    }, []
    )


    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="container-for-card1">
                {/* <CardPizza 
                        nombre="Napolitana" 
                        precio={5950} 
                        ingredientes="mozzarella, tomates, jamón, orégano" 
                        imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                    />
                    
                    <CardPizza 
                        nombre="Española" 
                        precio={6950} 
                        ingredientes="mozzarella, gorgonzola, parmesano, provolone" 
                        imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
                    />
                    <CardPizza 
                        nombre="Pepperoni" 
                        precio={6950} 
                        ingredientes="mozzarella, pepperoni, orégano" 
                        imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
                    /> */}

                {/* //*HITO 3 */}
                {/* <CatalogoPizzas /> */}

                {/* //* HITO 4 */}
                <article className="container">
                    {Pizzas.map(pizza => <PizzaCard
                        img={pizza.img}
                        name={pizza.name}
                        ingredients={pizza.ingredients}
                        price={pizza.price}
                        key={pizza.id} />)
                    }
                </article>
            </div>
        </>
    )
}

export default Home