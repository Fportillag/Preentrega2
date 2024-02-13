//es el componente de presentacion
import Item from '../Item/Item'
const ItemList = ({ products })=>{
    
    return (
        <div className='contenedor'>
            {
                products.map(prod => <Item key={prod.id} {...prod}/>)
            }
        </div>
    )

}

export default ItemList;
