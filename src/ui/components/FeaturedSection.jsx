import { useEffect } from "react";
import useFetch from "../../hook/useFetch";
import API_ROUTE from "../../api/apiRoutes";
import SingleProduct from "./SingleProduct";

const FeaturedSection = (props) => {
    // eslint-disable-next-line react/prop-types
    const { featuredIn } = props;
    const baseURl = `${API_ROUTE.PUBLIC_PRODUCTS_ROUTE}?featuredIn=${featuredIn}`;

    const { isLoading, data, error, fetchDataByUrl } = useFetch();

    useEffect(() => {
        fetchDataByUrl(baseURl);
    }, [baseURl, fetchDataByUrl]);

    return (
        <div>
            <h4>{featuredIn.replace("_", " ")}</h4>
            <section className='row'>
                {data?.map((product) => {
                    return (
                        <div className='col-12 col-md-3' key={product._id}>
                            <SingleProduct product={product} />
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default FeaturedSection;
