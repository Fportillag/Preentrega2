import { useEffect, useState } from "react";
import { getProducts, getCategoryId} from '../../asyncMock.js'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from "react-router-dom";

 const ItemListContainer =({ greeting })=>{

    const [products,setProducts] = useState([])

    const { categoryId } = useParams()

    console.log(categoryId)
    useEffect(()=>{

        const asyncFunc = categoryId ? getCategoryId : getProducts

        asyncFunc(categoryId)
        .then(response =>{
            setProducts(response)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[categoryId])


    return (
        <div className="box">
        <h1>{greeting}</h1>
        <ItemList products={products}/>
        </div>
    )


}
export default ItemListContainer;
