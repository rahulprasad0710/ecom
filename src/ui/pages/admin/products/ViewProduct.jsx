import { useParams } from "react-router-dom";
import useFetch from "../../../../hook/useFetch";
import API_ROUTES from "../../../../api/apiRoutes";
import { useEffect } from "react";
import Loader from "../../../molecules/Loader";
import ViewHeading from "../../../components/ViewHeading";

const ViewProduct = () => {
    const { productId } = useParams();
    const { isLoading, data, fetchDataByUrl } = useFetch();

    useEffect(() => {
        fetchDataByUrl(`${API_ROUTES.GET_PRIVATE_PRODUCT_LIST}/${productId}`);
    }, [fetchDataByUrl, productId]);

    console.log("productId", productId);

    return (
        <div className='w-100'>
            <ViewHeading headingTitle='View Products' />
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
