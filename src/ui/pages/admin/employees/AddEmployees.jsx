// {
//   "firstName": "John",
//   "middleName": "Doe",
//   "lastName": "Smith",
//   "email": "john55@example.com",
//   "status": "ACTIVE",
//   "jobPosition": "Developer",
//   "isAdmin": true,
//   "password": "Password123",
//   "confirmPassword": "Password123",
//   "mobileNumber": 1234567897,
//   "position": "Manager",
//   "permission": ["USER_VIEW", "USER_EDIT","ADMIN_VIEW"]
// }

import { useNavigate } from "react-router-dom";

const AddEmployees = () => {
    const navigate = useNavigate();

    return (
        <div className='w-100 m-3'>
            <div className='d-flex justify-content-between'>
                <h5>Add Employees</h5>
                <div>
                    <button
                        onClick={() => navigate(-1)}
                        className='btn btn-outline-warning btn-sm'>
                        Back
                    </button>
                </div>
            </div>
            <section></section>
        </div>
    );
};

export default AddEmployees;
