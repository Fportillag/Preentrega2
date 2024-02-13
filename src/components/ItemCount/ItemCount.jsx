import { useState } from "react";


const ItemCount = ({stock,initial})=>{
    const [cantidad,setCantidad] = useState(initial)

    const incrementar= () =>{
        if (cantidad<stock){
            setCantidad(cantidad+1)
        }
    }

    const decrementar = ()=>{
        if (cantidad>1){
            setCantidad(cantidad-1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrementar}>-</button>
                <h3 className="Number">{cantidad}</h3>
                <button className="Button" onClick={incrementar}>+</button>
            </div>

            <div>
                <button onClick={()=>setCantidad(0)}>Agregar Carrito</button>
            </div>

        </div>
    )
}


export default ItemCount;