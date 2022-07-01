import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getProducts } from './../../data';
// import FilterCategory from './FilterCategory';
import './Cards.css';

const Cards = ({ itemCat }) => {
    let products = getProducts();
    const [dataCatItem, setDataCatItem] = useState(products);

    return (
        <div>
            <ul className="cards">
                {dataCatItem.map((product) => {
                    const { id, category, image, price } = product;
                    return (
                        <li
                            key={product.id}
                        >
                            <Link to={`${category}/${id}`}>
                                <h4>{id}</h4>
                                <picture>
                                    <img
                                        key={image}
                                        src={image}
                                        alt=''
                                    />
                                </picture>
                                <div className="price-car">
                                    <h6 className="price">
                                        {price}
                                    </h6>
                                    {/* add car   */}
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Cards;