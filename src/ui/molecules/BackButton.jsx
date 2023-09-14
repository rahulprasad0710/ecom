import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className='btn btn-sm btn-outline-warning'>
            Back
        </button>
    );
};

export default BackButton;
