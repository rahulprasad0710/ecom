import { useEffect, useState } from "react";
import axios from "axios";
import API_ROUTES from "../../../../api/apiRoutes";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

const CategoryList = () => {
    const [catgList, setcatgList] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const [selectedLevelOneChilds, setselectedLevelOneChilds] = useState([]);
    const [showLevelTwo, setshowLevelTwo] = useState(false);

    const fetchcatgList = async () => {
        try {
            setisLoading(true);
            const response = await axios.get(API_ROUTES.GET_CATEGORY_LIST);
            console.log("response", response);
            setcatgList(response.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setisLoading(false);
        }
    };

    useEffect(() => {
        fetchcatgList();
    }, []);

    const handleSelectLevelOne = (id) => {
        const tempChild = catgList.map((item) => {
            if (item._id === id) setselectedLevelOneChilds(item.children);
        });
        setshowLevelTwo(true);
    };

    useEffect(() => {
        console.log(selectedLevelOneChilds);
    }, [selectedLevelOneChilds]);

    return (
        <div className='w-100 m-3'>
            <div className='d-flex justify-content-between'>
                <h5>Categories List</h5>
                <div>
                    <Link
                        to='/admin/categories/add'
                        className='btn btn-success btn-sm'>
                        Add Category
                    </Link>
                </div>
            </div>

            <section className='card mt-3'>
                {catgList.map((levelOneItems) => {
                    return (
                        <div key={levelOneItems._id}>
                            <div>
                                {levelOneItems.children.map((levelTwoItems) => {
                                    return (
                                        <div key={levelTwoItems._id}>
                                            {levelTwoItems.children.map(
                                                (levelThreeItems, index) => {
                                                    return (
                                                        <div
                                                            key={
                                                                levelThreeItems._id
                                                            }>
                                                            <div>
                                                                <h5 className='py-3 border '>
                                                                    <span>
                                                                        {index +
                                                                            1}
                                                                        .
                                                                    </span>
                                                                    <span className='px-2'>
                                                                        {
                                                                            levelOneItems.title
                                                                        }
                                                                    </span>
                                                                    <ArrowRight />
                                                                    <span className='px-2'>
                                                                        {
                                                                            levelTwoItems.title
                                                                        }
                                                                    </span>
                                                                    <ArrowRight />

                                                                    <span className='px-2'>
                                                                        {
                                                                            levelThreeItems.title
                                                                        }
                                                                    </span>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </section>
            <section className='d-flex '>
                <div className='card p-3 border '>
                    {catgList.map((item) => (
                        <div key={item._id}>
                            <h6
                                className='px-2 mx-1'
                                onMouseEnter={() =>
                                    handleSelectLevelOne(item._id)
                                }>
                                {item.title}
                            </h6>
                        </div>
                    ))}
                </div>
                {showLevelTwo && (
                    <div className='card p-3 border '>
                        {selectedLevelOneChilds.map((item) => (
                            <div key={item._id}>
                                <button
                                    className='btn btn-success btn-sm my-3'
                                    onClick={() =>
                                        handleSelectLevelOne(item._id)
                                    }>
                                    {item.title}
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default CategoryList;
