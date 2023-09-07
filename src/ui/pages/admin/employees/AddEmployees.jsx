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

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReactMultiSelect from "../../../molecules/ReactMultiSelect";
import PERMISSION from "../../../../contants/Permission";
import API_ROUTES from "../../../../api/apiRoutes";

const AddEmployees = () => {
    const navigate = useNavigate();
    const [permissionValue, setPermissionValue] = useState();
    const [adminData, setAdminData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        status: "",
        jobPosition: "",
        isAdmin: true,
        password: "",
        confirmPassword: "",
        mobileNumber: "",
        position: "",
    });

    const permissionOptions = PERMISSION.map((permissionItem) => {
        const obj = {
            label: permissionItem,
            value: permissionItem,
        };

        return obj;
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(permissionValue, "permissionValue");
        const permissionPayload = permissionValue.map((item) => {
            return item.value;
        });
        console.log(adminData, "submit");

        const payload = {
            ...adminData,
            permission: permissionPayload,
        };
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post(API_ROUTES.ADD_ADMIN, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(response, "response");

            if (response?.data?.success) {
                toast.success(response?.data?.message);
                navigate(-1);
            }
        } catch (error) {
            console.log(error);
        }
    };
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
            <section className='card p-3 mt-3'>
                <form>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <div className='mb-3'>
                                <label className='form-label'>First Name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            firstName: e.target.value,
                                        })
                                    }
                                    value={adminData.firstName}
                                    aria-describedby='emailHelp'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Middle Name
                                </label>
                                <input
                                    type='text'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            middleName: e.target.value,
                                        })
                                    }
                                    value={adminData.middleName}
                                    className='form-control'
                                />
                            </div>
                        </div>

                        <div className='col-12 col-md-4'>
                            <div className='mb-3'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    type='text'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            lastName: e.target.value,
                                        })
                                    }
                                    value={adminData.lastName}
                                    className='form-control'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>Email</label>
                                <input
                                    type='email'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            email: e.target.value,
                                        })
                                    }
                                    value={adminData.email}
                                    className='form-control'
                                    id='exampleInputPassword1'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Mobile Number
                                </label>
                                <input
                                    type='number'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            mobileNumber: e.target.value,
                                        })
                                    }
                                    value={adminData.mobileNumber}
                                    className='form-control'
                                    id='exampleInputPassword1'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>Password</label>
                                <input
                                    type='password'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            password: e.target.value,
                                        })
                                    }
                                    value={adminData.password}
                                    className='form-control'
                                    id='exampleInputPassword1'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Confirm Password
                                </label>
                                <input
                                    type='password'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            confirmPassword: e.target.value,
                                        })
                                    }
                                    value={adminData.confirmPassword}
                                    className='form-control'
                                    id='exampleInputPassword1'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <label className='form-label'>Status</label>
                            <select
                                className='form-select'
                                onChange={(e) =>
                                    setAdminData({
                                        ...adminData,
                                        status: e.target.value,
                                    })
                                }
                                value={adminData.status}
                                aria-label='Default select example'>
                                <option value='ACTIVE'>ACTIVE</option>
                                <option value='INACTIVE'>IN ACTIVE</option>
                            </select>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Job Position
                                </label>
                                <input
                                    type='text'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            jobPosition: e.target.value,
                                        })
                                    }
                                    value={adminData.jobPosition}
                                    className='form-control'
                                    id='exampleInputPassword1'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <label className='form-label'>Position</label>
                            <select
                                className='form-select'
                                onChange={(e) =>
                                    setAdminData({
                                        ...adminData,
                                        position: e.target.value,
                                    })
                                }
                                value={adminData.position}
                                aria-label='Default select example'>
                                <option value='ADMIN'>ADMIN</option>
                                <option value='SUPER_ADMIN'>SUPERADMIN</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='mb-3'>
                                <label className='form-label'>Permission</label>
                                <ReactMultiSelect
                                    value={permissionValue}
                                    setValue={setPermissionValue}
                                    defaultValue={permissionOptions[0]}
                                    options={permissionOptions}
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type='submit'
                        onClick={handleSubmit}
                        className='btn btn-primary mt-3'>
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddEmployees;
