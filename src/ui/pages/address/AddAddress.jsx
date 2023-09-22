import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import API_ROUTES from "../../../api/apiRoutes";
import { PrivateAxios } from "../../../api/AxiosInstance";
import { CUSTOMER_ADDRESS_TYPE } from "../../../contants/Address";

// {
//     "fullName":"raul Prasad",
//     "mobileNumber":"9819828300",
//      "mobileNumber2":"9819828303",
//      "addressLine1":"ramanand Chowk",
//      "ward": 8,
//      "townCity": "jankapur",
//      "district":"Dhanusha",
//      "province":"province 2"

// }

const AddAddress = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [adminData, setAdminData] = useState({
        fullName: "",
        mobileNumber: "",
        mobileNumber2: "",
        addressLine1: "",
        addressLine2: "",
        ward: undefined,
        townCity: "",
        district: "",
        province: "",
        addressType: "HOME",
    });

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();

        console.log(adminData, "submit");

        const payload = {
            ...adminData,
        };
        const token = localStorage.getItem("token");

        try {
            const response = await PrivateAxios.post(
                API_ROUTES.ADDRESS_ROUTES,
                payload
            );

            console.log(response, "response");

            if (response?.data?.success) {
                toast.success(response?.data?.message);
                navigate(-1);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className='w-100 m-3'>
            <div className='d-flex justify-content-between'>
                <h5>Add Address</h5>
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
                                <label className='form-label'>Full Name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleInputaddressLine11'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            fullName: e.target.value,
                                        })
                                    }
                                    value={adminData.fullName}
                                    aria-describedby='addressLine1Help'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='mb-3'>
                                <label className='form-label required'>
                                    Mobile Number
                                </label>
                                <input
                                    type='text'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            mobileNumber: e.target.value,
                                        })
                                    }
                                    value={adminData.mobileNumber}
                                    className='form-control'
                                />
                            </div>
                        </div>

                        <div className='col-12 col-md-4'>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Mobile Number (optional)
                                </label>
                                <input
                                    type='text'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            mobileNumber2: e.target.value,
                                        })
                                    }
                                    value={adminData.mobileNumber2}
                                    className='form-control'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <label className='form-label'>Address Type</label>
                            <select
                                className='form-select'
                                onChange={(e) =>
                                    setAdminData({
                                        ...adminData,
                                        addressType: e.target.value,
                                    })
                                }
                                value={adminData.status}
                                aria-label='Default select example'>
                                {CUSTOMER_ADDRESS_TYPE.map(
                                    (addressTypeItem) => {
                                        return (
                                            <option
                                                key={addressTypeItem}
                                                value={addressTypeItem}>
                                                {addressTypeItem}
                                            </option>
                                        );
                                    }
                                )}
                            </select>
                        </div>
                        <div className='col-12 col-md-12'>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Address Line 1
                                </label>
                                <input
                                    type='text'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            addressLine1: e.target.value,
                                        })
                                    }
                                    value={adminData.addressLine1}
                                    className='form-control'
                                    id='exampleInputPassword1'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-12'>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Address Line 2
                                </label>
                                <input
                                    type='text'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            addressLine2: e.target.value,
                                        })
                                    }
                                    value={adminData.addressLine2}
                                    className='form-control'
                                    id='exampleInputPassword1'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>Ward</label>
                                <input
                                    type='number'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            ward: e.target.value,
                                        })
                                    }
                                    value={adminData.ward}
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>Town/City</label>
                                <input
                                    type='text'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            townCity: e.target.value,
                                        })
                                    }
                                    value={adminData.townCity}
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>District</label>
                                <input
                                    type='text'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            district: e.target.value,
                                        })
                                    }
                                    value={adminData.district}
                                    className='form-control'
                                    id='exampleInputPassword1'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='mb-3'>
                                <label className='form-label'>Province</label>
                                <input
                                    type='text'
                                    onChange={(e) =>
                                        setAdminData({
                                            ...adminData,
                                            province: e.target.value,
                                        })
                                    }
                                    value={adminData.province}
                                    className='form-control'
                                    id='exampleInputPassword1'
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

export default AddAddress;
