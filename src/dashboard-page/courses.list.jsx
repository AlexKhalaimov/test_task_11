import React, { useState, useEffect } from 'react';
import CoursesItem from "./courses.item.jsx";
const CourseList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=10')
            .then(response => response.json())
            .then(data => {
                return setProducts(data.products)
            })
            .catch(error => console.error('Error:', error));
    }, []);
    return (
        <div className={'row-gap-3 d-flex flex-column'}>
            {products.map(product => (
                <CoursesItem key={product.id} product={product} />
            ))}
        </div>
    )
}
export default CourseList
