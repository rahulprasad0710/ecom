import { Link } from "react-router-dom";

const SingleProduct = (props) => {
    const { product } = props;
    return (
        <Link to={`/products/${product.slug}`} className='card p-3 m-3'>
            <div>
                <img
                    className='img-fluid'
                    src={product.thumbnil?.cloudPath}
                    alt={product?.name}
                />
                <h5>{product?.name}</h5>
            </div>

            <div className='d-flex justify-content-between mx-2'>
                <h4>{product?.mrp}</h4>
                <h4>{product?.price}</h4>
            </div>
        </Link>
    );
};

export default SingleProduct;
