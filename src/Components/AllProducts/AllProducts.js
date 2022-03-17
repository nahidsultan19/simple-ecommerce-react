import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = (props) => {
    const { setCartCount } = props;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return (
        <div className='container'>
            <h1>All Products</h1>
            <div className="row">
                {products.map((pd) => <SingleProduct key={pd.id} product={pd} setCartCount={setCartCount}></SingleProduct>)}
            </div>
        </div>
    );
};

export default AllProducts;