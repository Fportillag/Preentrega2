

//es un componente de presentacion
import {getProductById} from '../../asyncMock.js'
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () =>{

const [product,setProduct] = useState(null);
const { itemId } = useParams();


useEffect(()=>{
    getProductById(itemId)
    .then(response =>{
        setProduct(response)
    })
    .catch(err=>console.log("error en la conexion", err))

},[])


return (
    <div className='itemContainer'>
    <ItemDetail {...product}/>
    </div>
)



}

export default ItemDetailContainer;