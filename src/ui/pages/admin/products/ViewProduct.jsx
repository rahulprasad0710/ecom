import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../../hook/useFetch";
import API_ROUTES from "../../../../api/apiRoutes";
import { useEffect } from "react";
import Loader from "../../../molecules/Loader";

const ViewProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { isLoading, data, error, fetchDataByUrl } = useFetch();

    useEffect(() => {
        fetchDataByUrl(`${API_ROUTES.GET_PRIVATE_PRODUCT_LIST}/${productId}`);
    }, [fetchDataByUrl, productId]);

    console.log("productId", productId);

    return (
        <div className='w-100'>
            <div className='d-flex justify-content-between mb-3'>
                <h4>View Product</h4>
                <button
                    onClick={() => navigate(-1)}
                    className='btn btn-sm btn-outline-warning'>
                    Back
                </button>
            </div>
            <section>
                {isLoading && <Loader />}
                {data && !isLoading && (
                    <div>
                        {data?.name}
                        <img src={data?.thumbnil?.cloudPath} alt={data?.name} />
                    </div>
                )}
            </section>
        </div>
    );
};

export default ViewProduct;
