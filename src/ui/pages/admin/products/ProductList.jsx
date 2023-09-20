import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_ROUTES from "../../../../api/apiRoutes";
import useFetch from "../../../../hook/useFetch";
import PermissionButton from "../../../molecules/PermissionButton";
import { PRODUCT_STATUS_LIST } from "../../../../contants/Product";
import { PrivateAxios } from "../../../../api/AxiosInstance";
import { toast } from "react-toastify";

const ProductList = () => {
    const baseUrl = API_ROUTES.GET_PRIVATE_PRODUCT_LIST;
    const [fetchUrl, setFetchUrl] = useState(baseUrl);

    const navigate = useNavigate();
    const { data, isLoading, fetchDataByUrl, setData } = useFetch();
    const [fetchAgain, setFetchAgain] = useState(false);

    useEffect(() => {
        fetchDataByUrl(fetchUrl);
    }, [fetchUrl, fetchDataByUrl]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleView = (id) => {
        navigate(`/admin/products/${id}`);
    };

    useEffect(() => {
        if (fetchAgain) {
            fetchDataByUrl(fetchUrl);
            setFetchAgain(false);
        }
    }, [fetchAgain, fetchDataByUrl, fetchUrl]);

    const handleChangeStatus = async (status, productId) => {
        console.log(status);
        console.log(productId);
        const payload = {
            status,
        };
        const url = `${API_ROUTES.GET_PRIVATE_PRODUCT_LIST}/${productId}`;

        try {
            const response = await PrivateAxios.put(url, payload);

            if (response?.data?.sucess) {
                // setFetchAgain(true);
                const tempData = data;
                console.log(tempData);
                const newData = tempData.map((item) => {
                    if (item._id === productId) {
                        item.status = status;
                        return item;
                    } else {
                        return item;
                    }
                });

                setData(newData);
                toast.success(response?.data?.message);
            }

            console.log({ response });
        } catch (error) {
            console.log(error);
            toast.error("Something Went Error");
        }
    };

    const handleSortStatus = (status) => {
        console.log(status);
        const newUrl = `${baseUrl}?status=${status}`;
        setFetchUrl(newUrl);
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
                <div className='row my-3'>
                    <div className='col-md-4 '>
                        <label htmlFor=''>Sort By:</label>
                        <select
                            onChange={(e) => handleSortStatus(e.target.value)}
                            className='form-select form-select-sm'>
                            {PRODUCT_STATUS_LIST.map((status) => (
                                <option key={status} value={status}>
                                    {status.replace("_", " ")}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-4'></div>

                    <div className='col-md-4 '>
                        <nav aria-label='Page navigation float-end'>
                            <ul className='pagination'>
                                <li className='page-item'>
                                    <button className='page-link' href='#'>
                                        Previous
                                    </button>
                                </li>

                                <li className='page-item'>
                                    <button className='page-link' href='#'>
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>S.n#</th>
                            <th scope='col'>Thumbnil</th>
                            <th scope='col'>Product Code</th>
                            <th scope='col'>Product Name</th>
                            <th scope='col'>Current Status</th>
                            <th scope='col'>Actions</th>
                            <th scope='col'>Change Status</th>
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
                                                    {item.status.replace(
                                                        "_",
                                                        " "
                                                    )}
                                                </span>
                                            ) : (
                                                <span className='badge rounded-pill text-bg-warning'>
                                                    {item.status.replace(
                                                        "_",
                                                        " "
                                                    )}
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
                                        <td>
                                            <select
                                                onChange={(e) =>
                                                    handleChangeStatus(
                                                        e.target.value,
                                                        item._id
                                                    )
                                                }
                                                value={item.status}
                                                className='form-select form-select-sm'>
                                                {PRODUCT_STATUS_LIST.map(
                                                    (status) => (
                                                        <option
                                                            key={status}
                                                            value={status}>
                                                            {status.replace(
                                                                "_",
                                                                " "
                                                            )}
                                                        </option>
                                                    )
                                                )}
                                            </select>
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
