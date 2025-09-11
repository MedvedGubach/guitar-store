import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import ProductPageLayout from "@/Layouts/ProductPageLayout";
import AllProductsByCategory from "@/pages/AllProductsByCategory";

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
        element: <AllProductsByCategory />
    }
]);

export default appRouter;
