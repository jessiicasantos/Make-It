// import { useParams } from 'react-router-dom';
// import { getProducts } from '../data';
// import Category from './Category';

function Product() {
    // let params = useParams();
    // let productCategory = params.productCategory;
    // let products = getProducts();

    return (
        <div
            style={{
                padding: "1rem"
            }}
        >
            <h1>Show single product here</h1>
        </div>
        // <div
        //     style={{
        //         padding: "1rem"
        //     }}
        //     className="product container"
        // >
        //     {/* substituir aqui */}
        //     <h2>Escolha um produto: </h2>
        //    <h3>Categoria: {productCategory}</h3>
        //     {/* produto */}
        //     {products.map((product) => (
        //         <li key={product.id}>
        //             {product.id}
        //          </li>
        //     ))}
        // </div>
    );
}

export default Product;