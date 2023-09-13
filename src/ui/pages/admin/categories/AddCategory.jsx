import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PrivateAxios } from "../../../../api/AxiosInstance";
import API_ROUTE from "../../../../api/apiRoutes";
import useFetch from "../../../../hook/useFetch";
import { toast } from "react-toastify";

const AddCategory = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [selectedLevel, setSelectedLevel] = useState(1);
    const [parentLevelOneArray, setParentLevelOneArray] = useState([]);
    const [parentLevelTwoArray, setParentLevelTwoArray] = useState([]);

    const [selectedParentId, setSelectedParentId] = useState();
    const [selectedLevelOneParent, setselectedLevelOneParent] = useState();

    const levelOption = [
        {
            title: "1",
            value: 1,
        },
        {
            title: "2",
            value: 2,
        },
        {
            title: "3",
            value: 3,
        },
    ];

    useEffect(() => {
        const fetchParentData = async () => {
            try {
                const response = await PrivateAxios.get(
                    `${API_ROUTE.GET_PRIVATE_CATEGORY_LIST}?level=1`
                );
                console.log(response?.data?.data);
                setParentLevelOneArray(response?.data?.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (selectedLevel != 1) {
            fetchParentData();
        }
    }, [selectedLevel]);

    const handleChangeLevel = (e) => {
        console.log(e.target.value);
        console.log(selectedLevelOneParent, "selectedLevelOneParent");
        setSelectedLevel(e.target.value);
        if (e.target.value == 1) {
            setSelectedParentId(undefined);
            setParentLevelOneArray([]);
            setParentLevelTwoArray([]);
        }
        if (e.target.value == 2) {
            console.log(
                "selectedLevelOneParent",
                selectedLevelOneParent,
                "dsds"
            );
            setParentLevelTwoArray([]);
            setselectedLevelOneParent("");
            setSelectedParentId(undefined);
        }

        if (e.target.value == 3 && selectedLevelOneParent) {
            setSelectedParentId(undefined);
            fetchDataByUrl(
                `${API_ROUTE.GET_CATEGORY_LIST}/${selectedLevelOneParent}`
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) {
            toast.error("Please enter title");
            return;
        }

        if (selectedLevel == 2 && !selectedParentId) {
            toast.error("Please select Level 1 parent");
            return;
        }

        if (selectedLevel == 3 && !selectedParentId) {
            toast.error("Please select Level 2 parent");
            return;
        }
        const payload = {
            title: title,
            level: Number(selectedLevel),
            parent: Number(selectedLevel) === 1 ? null : selectedParentId,
        };
        console.log(payload);
        try {
            const response = await PrivateAxios.post(
                API_ROUTE.ADD_CATEGORY,
                payload
            );

            if (response?.data?.success) {
                toast.success(response?.data?.message);
                navigate("/admin/categories");
            }
            console.log(response);
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    };

    const { data, fetchDataByUrl } = useFetch();

    useEffect(() => {
        console.log("data", data);
        if (data?.children) {
            setParentLevelTwoArray(data?.children);
        }
    }, [data]);

    const handleSelectGrandParent = (e) => {
        console.log(e.target.value);

        if (selectedLevel === "2") {
            setselectedLevelOneParent(e.target.value);
            setSelectedParentId(e.target.value);
        }

        if (selectedLevel === "3") {
            setselectedLevelOneParent(e.target.value);
            fetchDataByUrl(`${API_ROUTE.GET_CATEGORY_LIST}/${e.target.value}`);
        }
    };

    return (
        <div>
            <div>Add Category</div>
            <section>
                <div className='card shadow shadow-sm p-3 mt-3'>
                    <form>
                        <div className='row'>
                            <div className='col-12 col-md-4'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Select Level
                                    </label>
                                    <select
                                        defaultValue={selectedLevel}
                                        value={selectedLevel}
                                        onChange={(e) => handleChangeLevel(e)}
                                        className='form-select'>
                                        {levelOption.map((item) => (
                                            <option
                                                key={item.value}
                                                value={item.value}>
                                                {" "}
                                                {item.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 col-md-8'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Category title
                                    </label>
                                    <input
                                        type='text'
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        value={title}
                                        className='form-control'
                                        id='exampleInputEmail1'
                                    />
                                </div>
                            </div>
                            {parentLevelOneArray &&
                            parentLevelOneArray?.length > 0 ? (
                                <div className='col-12 col-md-6'>
                                    <div className='mb-3'>
                                        <label className='form-label '>
                                            Grand Parent (Level 1)
                                        </label>
                                        <select
                                            onChange={(e) =>
                                                handleSelectGrandParent(e)
                                            }
                                            defaultValue={""}
                                            placeholder='Please Select Level 1 Parent'
                                            value={selectedLevelOneParent}
                                            className='form-select'>
                                            <option value={""}>
                                                Please Select Level 1
                                            </option>
                                            {parentLevelOneArray?.map(
                                                (parentItem) => (
                                                    <option
                                                        value={parentItem._id}
                                                        key={parentItem._id}>
                                                        {parentItem.title}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </div>
                            ) : null}

                            {parentLevelTwoArray &&
                            parentLevelTwoArray?.length > 0 ? (
                                <div className='col-12 col-md-6'>
                                    <div className='mb-3'>
                                        <label className='form-label '>
                                            Parent (Level 2)
                                        </label>
                                        <select
                                            onChange={(e) =>
                                                setSelectedParentId(
                                                    e.target.value
                                                )
                                            }
                                            placeholder='Please Select Level 2 Parent'
                                            value={selectedParentId}
                                            className='form-select'>
                                            <option value={undefined}>
                                                Please Select Level 2
                                            </option>
                                            {parentLevelTwoArray?.map(
                                                (parentItem) => (
                                                    <option
                                                        value={parentItem._id}
                                                        key={parentItem._id}>
                                                        {parentItem.title}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </div>
                            ) : (
                                <div className='col-12 col-md-6'>
                                    <p className='text-muted'>
                                        No Parent Found. Please select Level 1
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className='col-12'>
                            <div className='float-end'>
                                <button
                                    type='submit'
                                    onClick={handleSubmit}
                                    className='btn btn-primary'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddCategory;
