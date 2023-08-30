import DeleteModal from "../HOC/DeleteModal";
import CatgModal from "../molecules/CatgModal";

const HomePage = () => {
    return (
        <div>
            <DeleteModal>
                <CatgModal />
            </DeleteModal>
        </div>
    );
};

export default HomePage;
