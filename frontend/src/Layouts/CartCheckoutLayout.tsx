import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import CartCheckout from "@/pages/CartCheckout"

const CartCheckoutLayout = () => {
    return (

        <>
            <Navbar />
            <CartCheckout />
            <Footer />
        </>
    )
}

export default CartCheckoutLayout