import FilterCategory from '../../components/Category/FilterCategory';
import Cards from '../../components/Cards/Cards';
import './Products.css';

function Products() {
    return (
        <div className="products flex">
            <FilterCategory />
            <div className="main-products">
                <h1>Principais Produtos</h1>
                <Cards />
            </div>
        </div>
    );
}

export default Products;