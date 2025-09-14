import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import ProductPageLayout from "@/layouts/ProductPageLayout";
import AllProductsLayout from "@/layouts/AllProductsLayout";

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
    }
]);

export default appRouter;
