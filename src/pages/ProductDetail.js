import React from "react";
import { useParams } from "react-router";

const ProductDetail = props => {
    const params = useParams();
    console.log(params.id);

    return (
       <section>
           <h1>Product Detail</h1>
           <p>{params.id}</p>
       </section> 
    );
}

export default ProductDetail;