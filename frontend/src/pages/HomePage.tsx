import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ExploreCategories from "@/components/home/ExploreCategories";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import axios from "axios";

const HomePage = () => {

    const data = axios.get('http://localhost:3000/');
    console.log(data)

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
