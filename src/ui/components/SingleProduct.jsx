const SingleProduct = (props) => {
    const { product } = props;
    return (
        <div className='card p-3 m-3'>
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
        </div>
    );
};

export default SingleProduct;
