import { useEffect, useState } from "react";
import axios from "axios";
import API_ROUTES from "../../../../api/apiRoutes";
import { Link } from "react-router-dom";

const AddCategory = () => {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h5>Add Categories</h5>
                <section>
                    <form action=''>
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
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddCategory;
