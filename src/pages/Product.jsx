import { useState } from "react";
import { Link } from "react-router-dom";
const Product = () => {
    const [input,setinput]=useState()
    return ( <div>
        <input type="text" onChange={(e)=>{setinput(e.target.value)}}></input>
        <Link to={`/product/${input}`}>페이지로 이동</Link>
    </div>  );
}
 
export default Product;