import '../Cards.css'

const CardPizza = (props) => {
    return (
        <article className='card'>
            <img src={ props.imagen } class="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title text-start">Pizza { props.nombre }</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <h6>Ingredientes:</h6>
                    <p className="card-text ingredientes">🍕 { props.ingredientes }</p>
                </li>
                <li className="list-group-item precio">
                    <p>Precio: ${ props.precio }</p>
                    <div className='botones'>
                        <button className='ver-mas'>Ver más 👀</button>
                        <button className='add'>Añadir 🛒</button>
                    </div>
                </li>
            </ul>
        </article>
    )
}

export default CardPizza