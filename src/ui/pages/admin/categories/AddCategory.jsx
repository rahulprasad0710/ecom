import { useEffect, useState } from "react";
import API_ROUTES from "../../../../api/apiRoutes";
import useFetch from "../../../../hook/useFetch";
import { ArrowRight } from "react-bootstrap-icons";

// {
//     "title" :"Plain T-Shirt",
//     "level":3,
//     "parent":"64e8a080d4b3bab0beafbfd3"
// }

const AddCategory = () => {
    const { data, fetchDataByUrl } = useFetch();

    useEffect(() => {
        fetchDataByUrl(API_ROUTES.GET_CATEGORY_LIST);
    }, [fetchDataByUrl]);

    const [title, setTitle] = useState("");
    const [level, setLevel] = useState(1);
    const [parent, setParent] = useState(null);

    const handleLevelChange = (e) => {
        console.log("e", e.target.value);
        setLevel(e.target.value);
    };

    const handleSubmit = () => {
        console.log(title, level);
    };

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h5>Add Categories</h5>
                <section className='card p-3'>
                    <form className='row'>
                        <div className='col-12 col-md-4'>
                            <label className='form-label'>Level</label>
                            <select
                                value={level}
                                onChange={(e) => handleLevelChange(e)}
                                className='form-select'
                                aria-label='Default select example'>
                                <option value='1'>Level 1</option>
                                <option value='2'>Level 2</option>
                                <option value='3'>Level 3</option>
                            </select>
                        </div>
                        <div className='col-12 col-md-12 '>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Category Title
                                </label>
                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type='email'
                                    className='form-control'
                                />
                            </div>
                        </div>
                        {level === 2 && (
                            <select className='form-select'>
                                {data &&
                                    data.map((levelOneItems) => {
                                        return (
                                            <option
                                                key={levelOneItems._id}
                                                value={levelOneItems._id}>
                                                {levelOneItems.title}
                                            </option>
                                        );
                                    })}
                            </select>
                        )}

                        <select className='card mt-3'>
                            {data.map((levelOneItems) => {
                                return (
                                    <option key={levelOneItems._id}></option>
                                );
                            })}
                        </select>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddCategory;
