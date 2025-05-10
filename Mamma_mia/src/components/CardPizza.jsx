
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

const CardPizza = ({ imagen, nombre, ingredientes, precio }) => {
    return(
        <article>
            
            <Card style={{ width:"22rem", marginTop:"2rem" }}>
                <Card.Img variant='top' src={imagen} />
                
                <ListGroup style={{ margin:"0px", padding:"0px" }} className="list-group-flush">
                        <ListGroup.Item><Card.Title>Pizza {nombre}</Card.Title></ListGroup.Item>
                        <ListGroup.Item style={{ textAlign:"center" }}>
                            <Card.Text>Ingredientes:</Card.Text>
                            <Card.Text style={{ fontSize: "14px", color:"gray" }}>🍕 {ingredientes}</Card.Text>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ textAlign:"center"}}>
                            <Card.Text style={{ fontSize:"1.2rem", fontWeight:"500"}}>Precio: {precio}</Card.Text>
                            <div className='botones'>
                                <button className='ver-mas'>Ver más 👀</button>
                                <button className='add'>Añadir 🛒</button>
                            </div>
                        </ListGroup.Item>
                </ListGroup>
                
            </Card>
            
        </article>

    )

}


export default CardPizza