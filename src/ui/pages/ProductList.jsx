import DeleteModal from "../HOC/DeleteModal";
import ProductModal from "../molecules/ProductModal";

const ProductPage = () => {
    return (
        <div>
            <DeleteModal>
                <ProductModal />
            </DeleteModal>
        </div>
    );
};

export default ProductPage;
