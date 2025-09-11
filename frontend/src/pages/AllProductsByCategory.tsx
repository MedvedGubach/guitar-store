import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import useProducts from "@/hooks/useProducts";
import guitarSpecBadgeColors from "@/styles/GuitarSpecBadges";
import pedalSpecBadges from "@/styles/PedalSpecBadges";
import { Badge, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router";

const AllProductsByCategory = () => {

    const filter = useLocation();
    const { data, loading, error } = useProducts();
    const products = data.filter(product => product.category === filter.state);

    console.log('products-----:', products);
    console.log(filter);

    if (loading) return (<p className="text-white text-2xl font-bold animate-pulse text-center">Loading...</p>)
    if (error) return (<p className="text-red-500 text-2xl font-bold animate-pulse">Error!</p>)

    return (
        <main className="p-12">
            <div className="">

                <div className="">

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product) => (
                        <>
                            <Card key={product.id} className="bg-(--color-item-background) max-w-sm rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 hover:ring-(--color-primary) dark:hover:ring-blue-600 hover:ring-1 transition duration-300">
                                <img
                                    src={product.images[0]}
                                    alt={`${product.name}-Image`}
                                    className="object-cover h-64 w-128 cursor-pointer"
                                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                                />

                                <CardContent className="">
                                    <CardTitle className="text-(--color-primary-text) text-xl font-bold justify-start">{product.name}</CardTitle>
                                    <CardDescription>
                                        <p className="text-(--color-secondary-text) font-semibold mt-2 line-clamp-2">{product.desc}</p>
                                    </CardDescription>
                                    <div className="flex flex-col gap-2 mt-4">
                                        <div className="">
                                            <span className="text-green-800 dark:text-yellow-500 font-bold text-xl">${product.price}</span>
                                        </div>

                                        <div className="flex flex-wrap mb-3">
                                            <div className="space-x-2 space-y-1">
                                                {
                                                    filter.state === 'guitar' ?
                                                        <>
                                                            <Badge className={guitarSpecBadgeColors.neckWood}>Neck: {product.neckWood}</Badge>
                                                            <Badge className={guitarSpecBadgeColors.fantasyColor}>Finish: {product.fantasyColor}</Badge>
                                                            <Badge className={guitarSpecBadgeColors.fretNumber}>Frets: {product.fretNumber}</Badge>
                                                            {product.pickups && (<Badge className={guitarSpecBadgeColors.pickups}>Pickups: {product.pickups?.config}</Badge>)}
                                                            <Badge className={guitarSpecBadgeColors.orientation}>Orientation: {product.orientation}</Badge>
                                                        </>

                                                        : filter.state === 'pedal' ?

                                                            <>
                                                                <Badge className={pedalSpecBadges.effect}>Effect: {product.effect}</Badge>
                                                                <Badge className={pedalSpecBadges.power}>Power: {product.power}</Badge>
                                                            </>

                                                            :
                                                            null
                                                }
                                            </div>
                                        </div>

                                        <div className="">
                                            <Link to={`/product/${product.name}`} state={product}>
                                                <Button className="bg-(--color-primary-button) text-white font-bold w-full hover:bg-(--color-primaryButton-hover)">
                                                    Add to Cart <ShoppingCart className="" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default AllProductsByCategory