import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import API_ROUTES from "../../../../api/apiRoutes";
import { useEffect } from "react";
import Loader from "../../../molecules/Loader";

const EmployeesList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [employees, setEmployees] = useState([]);

    const fetchData = async () => {
        const token = localStorage.getItem("token");
        try {
            setIsLoading(true);
            const response = await axios.get(API_ROUTES.GET_EMPLOYEES_LIST, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("response", response);

            setEmployees(response?.data?.employees);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                        {employees?.length > 0 &&
                            !isLoading &&
                            employees.map((item, index) => {
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

export default EmployeesList;
