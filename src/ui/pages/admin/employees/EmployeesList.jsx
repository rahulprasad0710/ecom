import { Link } from "react-router-dom";

const EmployeesList = () => {
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
        </div>
    );
};

export default EmployeesList;
