
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const PizzaCard = ({ img, name, ingredients, price, count, id}) => {
    const { cart, setCart } = useContext(CartContext);

    const navigate = useNavigate();
    const irAPizzas = (id) => {
        navigate(`/pizzas/${id}`);
    }

    const enviarPizza = (e) => {
        e.preventDefault();
        setCart([...cart, { img, name, ingredients, price ,count:1, id:cart.length + 1, }]);
    }


    return (
        <>
            <Card style={{ width: "22rem", marginTop: "2rem" }}>
                <Card.Img variant='top' src={img} />
                <ListGroup style={{ margin: "0px", padding: "0px" }} className="list-group-flush">
                    <ListGroup.Item><Card.Title>Pizza {name}</Card.Title></ListGroup.Item>
                    <ListGroup.Item style={{ textAlign: "center" }}>
                        <Card.Text>Ingredientes:</Card.Text>
                        <Card.Text style={{ fontSize: "14px", color: "gray", display: "flex", justifyContent: "center" }}>🍕
                            {
                                ingredients.map((ingred, recorrido) => (
                                    <span key={ingred}>{ingred}{recorrido < ingredients.length - 1 && ", "}</span>
                                ))
                            }
                        </Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ textAlign: "center" }}>
                        <Card.Text style={{ fontSize: "1.2rem", fontWeight: "500" }}>Precio: ${price.toLocaleString("es-CL")}</Card.Text>
                        <div className='botones'>
                        <button className='ver-mas' onClick={() => irAPizzas(id)}>Ver más 👀</button>
                            <form onSubmit={enviarPizza}>    
                                <button className='add'>Añadir 🛒</button>
                            </form>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    )
}

export default PizzaCard