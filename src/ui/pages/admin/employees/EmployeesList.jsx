import { Link } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../../../molecules/Loader";
import useFetch from "../../../../hook/useFetch";
import API_ROUTES from "../../../../api/apiRoutes";

const DataList = () => {
    const { isLoading, data, error, fetchDataByUrl } = useFetch();

    useEffect(() => {
        fetchDataByUrl(API_ROUTES.GET_EMPLOYEES_LIST);
    }, [fetchDataByUrl]);

    return (
        <div className='m-3 w-100'>
            <div className='d-flex justify-content-between'>
                <h5>Employee List</h5>
                <div>
                    <Link
                        to='/admin/employees/add'
                        className='btn btn-success btn-sm'>
                        Add Employee
                    </Link>
                </div>
            </div>
            <section className='my-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>S.n#</th>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Job Position</th>
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
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
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
                                        <td>{item.jobPosition}</td>
                                        <td>
                                            <button className='btn btn-info btn-sm'>
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        {isLoading && <Loader />}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default DataList;
