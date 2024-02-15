
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({id,name,price,category,img,stock,description})=>{

    return (
        <div className="contenedorDetail">
        <div className="contenedorDetail-img">
          <img src={img} ></img>
        </div>

        <div className="detail">
        <div className="contenedorDetail-info">
          <p className="contenedorDetail-title">{name}</p>
        </div>
        <div className="contenedorDetail-footer">
        <p className="contenedorDetail-desc">{description}</p>
          <span className="contenedorDetail-title">${price}</span>
          <ItemCount stock={stock} initial={1}/>
        </div>
       
        </div>
      </div>
    )
}


export default ItemDetail;