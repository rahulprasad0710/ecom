import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import API_ROUTES from "../../../api/apiRoutes";
const UserSignup = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [signupData, setSignupData] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        mobileNumber: "",
        confirmPassword: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log({ signupData });
        const payload = signupData;
        delete payload.confirmPassword;
        try {
            const response = await axios.post(API_ROUTES.USER_SIGNUP, payload);

            console.log(response);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/");
            }
        } catch (error) {
            // console.log("error", error);
            const errorDetails = error.response.data;
            console.log(errorDetails);
            if (!errorDetails.succes) {
                const errMsgAll = errorDetails?.error?.details;
                // toast.error(errMsgAll[0].message);

                for (let index = 0; index < errMsgAll.length; index++) {
                    const element = errMsgAll[index];
                    toast.error(element.message);
                }
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='container pt-3'>
            <h5 className='mb-3'>Sign Up </h5>
            <pre>{JSON.stringify(signupData, null, 2)}</pre>
            <div className='row offset-2 '>
                <div className='col-8'>
                    <form className='card p-5'>
                        <div className='row'>
                            <div className='col-12 '>
                                <div className='mb-3'>
                                    <label className='form-label'>Name</label>
                                    <input
                                        type='text'
                                        onChange={(e) =>
                                            setSignupData({
                                                ...signupData,
                                                name: e.target.value,
                                            })
                                        }
                                        className='form-control'
                                    />
                                </div>
                            </div>
                            <div className='col-12 m'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Username
                                    </label>
                                    <input
                                        type='text'
                                        onChange={(e) =>
                                            setSignupData({
                                                ...signupData,
                                                username: e.target.value,
                                            })
                                        }
                                        className='form-control'
                                    />
                                </div>
                            </div>
                            <div className='col-12 m'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Mobile Number
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            setSignupData({
                                                ...signupData,
                                                mobileNumber: e.target.value,
                                            })
                                        }
                                        type='number'
                                        className='form-control'
                                    />
                                </div>
                            </div>
                            <div className='col-12 m'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Email address
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            setSignupData({
                                                ...signupData,
                                                email: e.target.value,
                                            })
                                        }
                                        type='email'
                                        className='form-control'
                                    />
                                </div>
                            </div>
                            <div className='col-12 m'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Password
                                    </label>
                                    <input
                                        type='password'
                                        onChange={(e) =>
                                            setSignupData({
                                                ...signupData,
                                                password: e.target.value,
                                            })
                                        }
                                        className='form-control'
                                        id='exampleInputPassword1'
                                    />
                                </div>
                            </div>
                            <div className='col-12 m'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Confirm Password
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            setSignupData({
                                                ...signupData,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                        type='password'
                                        className='form-control'
                                        id='exampleInputPassword1'
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type='submit'
                            disabled={isLoading}
                            onClick={handleSubmit}
                            className='btn btn-primary'>
                            {isLoading ? (
                                <span
                                    className='spinner-border text-warning'
                                    role='status'></span>
                            ) : (
                                <span> Submit</span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserSignup;
