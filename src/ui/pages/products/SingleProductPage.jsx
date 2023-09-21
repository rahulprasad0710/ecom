import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PrivateAxios } from "../../../api/AxiosInstance";
import useFetch from "../../../hook/useFetch";
import API_ROUTE from "../../../api/apiRoutes";

const SingleProductPage = () => {
    const { productSlug } = useParams();

    const baseURl = `${API_ROUTE.PUBLIC_PRODUCTS_ROUTE}/${productSlug}`;

    const { isLoading, data: product, error, fetchDataByUrl } = useFetch();

    useEffect(() => {
        fetchDataByUrl(baseURl);
    }, [baseURl, fetchDataByUrl]);

    const handleAddWishlist = async (productId) => {
        const url = `${API_ROUTE.WISHLIST_ROUTES}/${productId}`;
        try {
            const response = await PrivateAxios.put(url);
            console.log({ response });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <section className='row'>
                <div className='col-12 col-md-5'>
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
                </div>
                <div className='col-12 col-md-5'>
                    <div className='d-flex justify-content-between mx-2'>
                        <button
                            onClick={() => handleAddWishlist(product._id)}
                            className='btn btn-outline-info btn-sm'>
                            Add To Wishlist
                        </button>
                        <button className='btn btn-success btn-sm'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleProductPage;
