// {
//     "username":"rahulshah1002",
//     "password":"rahul9992",
//     "email":"rahul992@gmail.com",
//     "name":"Rahul Prasad",
//     "mobileNumber":98129828309
// }

const UserSignup = () => {
    const [userData, setuserData] = useState(second);

    const handleSubmit = () => {
        console.log("handleSubmit");
    };

    return (
        <div className='container '>
            <div className='row offset-2 py-5'>
                <div className='col-8'>
                    <form>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div className='mb-3'>
                                    <label className='form-label'>Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Username
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
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
                                        className='form-control'
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Email address
                                    </label>
                                    <input
                                        type='email'
                                        className='form-control'
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Password
                                    </label>
                                    <input
                                        type='password'
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
                                        className='form-control'
                                        id='exampleInputPassword1'
                                    />
                                </div>
                            </div>
                        </div>

                        <button type='submit' className='btn btn-primary'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserSignup;
