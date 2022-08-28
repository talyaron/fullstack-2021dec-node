import Hero from "./Hero";
import Catalog from "./Catalog";
import CatalogTitle from "./CatalogTitle";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <CatalogTitle />
            <Catalog />
        </div>
    );
}

export default Home;