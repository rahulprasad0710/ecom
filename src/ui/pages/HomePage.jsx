import FeaturedSection from "../components/FeaturedSection";

const HomePage = () => {
    const showSection = ["NEW_ARRIVAL", "TOP_RATED", "RECOMMENDED", "TRENDING"];
    return (
        <div>
            <section>
                <FeaturedSection />
            </section>
        </div>
    );
};

export default HomePage;
