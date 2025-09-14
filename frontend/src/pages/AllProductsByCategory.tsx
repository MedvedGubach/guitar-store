import ProductCards from "@/components/products/ProductCards";
import useProducts from "@/hooks/useProducts";
import { useLocation } from "react-router";
import { Button } from "@/components/ui/button";

const AllProductsByCategory = () => {

    const filter = useLocation();
    const { data, loading, error } = useProducts();
    const products = data.filter(product => product.category === filter.state);

    console.log('products-----:', products);
    console.log(filter);

    if (loading) return (<p className="text-white text-2xl font-bold animate-pulse text-center">Loading...</p>)
    if (error) return (<p className="text-red-500 text-2xl font-bold animate-pulse">Error!</p>)

    return (
        <main>


            <div className="flex p-12 space-x-6">
                <aside className="sticky top-0 h-screen overflow-y-auto w-76 z-40 bg-gray-800 text-white p-4">
                    <h3 className="text-(--colors-text-primary) text-xl text-center mb-2 ">Filters</h3>
                    <div className="bg-(--color-item-background) p-4">
                        <h1>dees nuts</h1>
                        <Button variant="primary"></Button>
                    </div>
                </aside>

                <div className="flex-1 overflow-y-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <ProductCards categoryFilter={filter.state} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AllProductsByCategory