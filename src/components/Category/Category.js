import { useParams } from 'react-router-dom';
import { getProducts } from '../../data';
import FilterCategory from './FilterCategory';

function Category() {
    let products = getProducts();
    // let params = useParams();
    // let productCategory = params.productCategory;

    return (
        <div
            style={{ display: "flex" }}
            className="filter-category-wrapper"
        >
            <FilterCategory />
            <h3>Categoria atual: </h3>
            {products.map((product) => (
                <>{product.category}</>
            ))};
        </div>
    );
}

export default Category;