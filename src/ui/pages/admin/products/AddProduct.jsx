import { useEffect } from "react";
import ViewHeading from "../../../components/ViewHeading";
import { PRODUCT_FEATURED_IN } from "../../../../contants/Product";
import API_ROUTES from "../../../../api/apiRoutes";
import useFetch from "../../../../hook/useFetch";
import { ArrowRight } from "react-bootstrap-icons";

const AddProduct = () => {
    const baseUrl = API_ROUTES.GET_PRIVATE_CATEGORY_LIST;
    const { data: catgList, isLoading, fetchDataByUrl } = useFetch();

    useEffect(() => {
        fetchDataByUrl(`${API_ROUTES.GET_PRIVATE_CATEGORY_LIST}?level=1`);
    }, [baseUrl, fetchDataByUrl]);

    useEffect(() => {
        console.log("data", catgList);
    }, [catgList]);

    return (
        <div>
            <ViewHeading headingTitle={"Add Products"} />
            <section className='card p-3'>
                <form className='row'>
                    <div className='col-12'>
                        <label htmlFor=''>Product Image</label>
                        <input className='form-control' type='file' />
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label>Products Name</label>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Brand</label>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Featured In</label>
                            <select className='form-select'>
                                {PRODUCT_FEATURED_IN.map((item) => (
                                    <option value={item} key={item}></option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className='form-group'>
                            <label>MRP</label>
                            <input type='number' className='form-control' />
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className='form-group'>
                            <label>Price</label>
                            <input type='number' className='form-control' />
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className='form-group'>
                            <label>Quantity</label>
                            <input type='number' className='form-control' />
                        </div>
                    </div>
                    <div className='col-12 col-md-12'>
                        <div className='form-group'>
                            <label>Category</label>
                            <select className='form-select'>
                                {catgList?.map((itemLevelOne) => {
                                    const levelOneTitle = itemLevelOne.title;
                                    const levelTwo = itemLevelOne.children;
                                    return levelTwo.map((levelTwoItem) => {
                                        const levelThree =
                                            levelTwoItem.children;
                                        return levelThree.map((item) => {
                                            return (
                                                <option key={item._id}>
                                                    Level-1 :-{levelOneTitle}
                                                    Level-2 :-
                                                    {levelTwoItem.title}
                                                    Level-3 :-{item.title}
                                                </option>
                                            );
                                        });
                                    });
                                })}
                            </select>
                        </div>
                    </div>

                    <div className='my-3'>
                        <button type='submit' className='btn btn-primary'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;
