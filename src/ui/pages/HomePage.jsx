import FeaturedSection from "../components/FeaturedSection";

const HomePage = () => {
    const showSection = ["NEW_ARRIVAL", "TOP_RATED", "RECOMMENDED", "TRENDING"];
    return (
        <div>
            <section>
                {showSection.map((item, index) => (
                    <FeaturedSection key={index} featuredIn={item} />
                ))}
            </section>
        </div>
    );
};

export default HomePage;
