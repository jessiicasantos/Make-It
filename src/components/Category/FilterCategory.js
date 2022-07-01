import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getProducts } from './../../data';

const FilterCategory = () => {
    let products = getProducts();
    const [dataCatItem, setDataCatItem] = useState(products);
    const onePerCat = [...new Set(products.map((product) => product.category))];
    
    const filterResultCat = (catItem) => {
        const resultCat = products.filter((curCat) => {
            // console.log(curCat);
            return curCat.category === catItem;
        });
        // console.log(resultCat);
        setDataCatItem(resultCat);
    }

    return (
        <nav className="sidebar categories">
            <h3>Categorias</h3>
            
            {/* <Link to="#" key={products.id} onClick={() => filterResultCat('LipTint')}>LipTint</Link>
            <Link to="#" key={products.id} onClick={() => filterResultCat('Rímel')}>Rímel</Link>
            <Link to="#" key={products.id} onClick={() => filterResultCat('Sombra')}>Sombra</Link> */}
            {products.map((product, i) => {
                return (
                    <Link
                        to={`./?category=${onePerCat[i]}`}
                        key={product.id}
                        onClick={() => {
                            filterResultCat(onePerCat[i]);
                            console.log(onePerCat[i]);
                        }}
                    >
                            {onePerCat[i]}
                    </Link>
                );
            })}

            {dataCatItem.map((product) => {
                console.log('dataCatItem: ');
                console.log(dataCatItem);
                
                console.log('change products filtered by this category');

                console.log('Infos this Product: ');
                console.log(product);

                return (
                    <div>
                        <h1>{product.id}</h1>
                        {/* show cards cat here */}
                    </div>
                );
            })}
        </nav>
    );
}

export default FilterCategory;