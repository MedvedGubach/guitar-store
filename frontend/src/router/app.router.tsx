import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import ProductPageLayout from "@/layouts/ProductPageLayout";
import AllProductsLayout from "@/layouts/AllProductsLayout";
import CartCheckoutLayout from "@/layouts/CartCheckoutLayout";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        index: true,
    },
    {
        path: '/product/:productName',
        element: <ProductPageLayout />
    },
    {
        path: '/all-products/:categoryFilter',
        element: <AllProductsLayout />
    },
    {
        path: '/cart-checkout',
        element: <CartCheckoutLayout />
    }
]);

export default appRouter;
