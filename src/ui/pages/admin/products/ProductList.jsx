import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_ROUTES from "../../../../api/apiRoutes";
import useFetch from "../../../../hook/useFetch";
import PermissionButton from "../../../molecules/PermissionButton";

const ProductList = () => {
    const baseUrl = API_ROUTES.GET_PRIVATE_PRODUCT_LIST;
    const navigate = useNavigate();
    const { data, isLoading, fetchDataByUrl } = useFetch();

    useEffect(() => {
        fetchDataByUrl(baseUrl);
    }, [baseUrl, fetchDataByUrl]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleView = (id) => {
        navigate(`/admin/products/${id}`);
    };

    return (
        <div>
            <div className='d-flex justify-content-between mb-3'>
                <h4>Product List</h4>
                <PermissionButton
                    requiredPermission='PRODUCT_CREATE'
                    toTitle='Add New Products'
                    toPath='/admin/products/add'
                />
            </div>

            <section className='my-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>S.n#</th>
                            <th scope='col'>Thumbnil</th>
                            <th scope='col'>Product Code</th>
                            <th scope='col'>Product Name</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Acctions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length > 0 &&
                            !isLoading &&
                            data.map((item, index) => {
                                return (
                                    <tr key={item._id}>
                                        <th scope='row'>{index + 1}</th>
                                        <td>
                                            <img
                                                style={{
                                                    height: "50px",
                                                    width: "30px",
                                                }}
                                                src={item?.thumbnil?.cloudPath}
                                                alt={item.name}
                                            />
                                        </td>
                                        <td>{item.productCode}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            {item.status === "ACTIVE" ? (
                                                <span className='badge rounded-pill text-bg-success'>
                                                    {item.status}
                                                </span>
                                            ) : (
                                                <span className='badge rounded-pill text-bg-warning'>
                                                    {item.status}
                                                </span>
                                            )}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleView(item._id)
                                                }
                                                className='btn btn-info btn-sm'>
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ProductList;

// "PRODUCT_VIEW",
//                 "PRODUCT_CREATE",
//                 "PRODUCT_UPDATE",
//                 "PRODUCT_DELETE",
