import { useNavigate } from "react-router-dom";

const ViewHeading = (props) => {
    // eslint-disable-next-line react/prop-types
    const { headingTitle } = props;
    const navigate = useNavigate();

    return (
        <div className='d-flex justify-content-between mb-3'>
            <h4>{headingTitle}</h4>
            <button
                onClick={() => navigate(-1)}
                className='btn btn-sm btn-outline-warning'>
                Back
            </button>
        </div>
    );
};

export default ViewHeading;
