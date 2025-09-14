import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import AllProductsByCategory from '@/pages/AllProductsByCategory'

const AllProductsLayout = () => {
    return (
        <>
            <Navbar />
            <AllProductsByCategory />
            <Footer />
        </>
    )
}

export default AllProductsLayout