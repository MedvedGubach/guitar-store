import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ExploreCategories from "@/components/ExploreCategories";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedProducts categoryFilter="guitar" mainTitle="Guitars" featuredText="Handpicked instruments from the world's most respected brands. Each guitar is professionally set up and ready to rock." />
            <FeaturedProducts categoryFilter="pedal" mainTitle="Pedals" featuredText="Best pedals for customizing a godly tone" />
            <ExploreCategories />
            <Newsletter />
            <Footer />
        </>
    );
};

export default HomePage;
