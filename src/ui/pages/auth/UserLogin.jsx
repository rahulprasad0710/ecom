import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import API_ROUTES from "../../../api/apiRoutes";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const UserLogin = () => {
    const globalState = useContext(ThemeContext);
    console.log(globalState);
    const { isDarkMode } = globalState;

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [signupData, setSignupData] = useState({
        password: "",
        email: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log({ signupData });
        const payload = signupData;
        delete payload.confirmPassword;
        try {
            const response = await axios.post(API_ROUTES.USER_LOGIN, payload);

            console.log(response);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/");
            }
        } catch (error) {
            // console.log("error", error);
            const errorDetails = error.response.data;
            console.log(errorDetails);
            if (!errorDetails.success) {
                console.log("errorDetails", errorDetails);
                if (errorDetails.type === "RequestValidator") {
                    const errMsgAll = errorDetails?.error?.details;
                    for (let index = 0; index < errMsgAll.length; index++) {
                        const element = errMsgAll[index];
                        toast.error(element.message);
                    }
                } else {
                    toast.error(errorDetails.error);
                }
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='container pt-3'>
            {/* <pre>{JSON.stringify(signupData, null, 2)}</pre> */}
            <div className='row  offset-lg-2 '>
                <div className='col-12 col-md-12 col-lg-8'>
                    <form className='card  p-3'>
                        <div className='col-12'>
                            <h5
                                className={
                                    isDarkMode
                                        ? "mb-3 text-center text-light fw-bold bg-dark"
                                        : "mb-3 text-center text-primary fw-bold"
                                }>
                                Login
                            </h5>
                            <h4>{name}</h4>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-12 '>
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
                            <div className='col-12 col-md-12 '>
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
                <div className='col-12'>
                    <p>Don&apos;t have an account ?</p>
                    <Link to='/auth/signup'>Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
