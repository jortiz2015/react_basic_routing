import React from "react";
import { Link } from "react-router-dom";

const Product = props => {

    return (
        <section>
            <h1>The product page</h1>
            <ul>
                <li><Link to="products/book">Book</Link></li>
                <li><Link to="products/carpet">Carpet</Link></li>
                <li><Link to="products/course">Course</Link></li>
            </ul>
        </section>
    );
}

export default Product;