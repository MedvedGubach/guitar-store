import { useLocation } from "react-router";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { BadgeAlert, BadgeCheck, ShoppingBag, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ProductPage = () => {
    const location = useLocation();
    const productData = location.state || {};
    const [amount, setAmount] = useState<number>(1);
    console.log('productData:---', productData)

    if (!productData) { return <div>Loading...</div>; }

    return (
        <main className="p-24">
            <div className="">
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 mb-24">
                    <div className="max-w-2xl ">
                        <Carousel >
                            <CarouselContent>
                                {
                                    productData.images.map((image: string, index: number) => (
                                        <CarouselItem key={index}>
                                            <img src={image} alt={`Product-Image-${index}`} className="h-128 w-full shadow-2xl" />
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    <div className="bg-(--color-item-background) rounded-xl p-8">

                        <h2 className="text-xl font-thin uppercase" >{productData.brand}</h2>
                        <h3 className="text-(--color-primary-text) text-4xl font-black mt-4 mb-4">{productData.name}</h3>
                        <h3 className="text-(--color-secondary-text) dark:text-yellow-500 font-black text-4xl mb-6">${productData.price}</h3>
                        <hr className="border-b-1 border-neutral-300 dark:border-neutral-600 mb-6" />

                        <div className="grid grid-cols-2 gap-6 mb-12">
                            <Button className="h-14 rounded-full font-bold" variant={'primary'}>Add to Cart <ShoppingCart /></Button>
                            <Button className="h-14 rounded-full font-bold" variant={'primary'}>Buy Now <ShoppingBag /></Button>
                        </div>

                        <div className="mb-6 items-center">
                            {productData.inStock ?
                                <span className="flex text-green-700 dark:text-green-400 font-black"><BadgeCheck />In Stock</span> :
                                <span className="flex text-red-600 font-black"><BadgeAlert /> No Stock</span>}
                        </div>

                        {/*   <div className="">
                            <label className="block" htmlFor="productAmount">Amount</label>
                            <Input className="w-16" id="productAmount" type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} min={1} max={10} step={1} />
                        </div> */}


                        <div className="relative flex items-center">
                            <div className="absolute left-0 flex items-center h-full">
                                <Button variant="ghost" size="sm" onClick={() => setAmount(amount - 1)}>-</Button>
                            </div>
                            <Input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(+e.target.value)}
                                className="pl-12 pr-10"
                            />
                            <div className="absolute right-0 flex items-center h-full">
                                <Button variant="ghost" size="sm" onClick={() => setAmount(amount + 1)}>+</Button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-(--color-item-background) rounded-xl p-6">
                    <h3 className="text-(--color-primary-text) text-2xl font-bold text-center mb-4" >Description</h3>
                    <p className="text-pretty">{productData.desc}</p>
                </div>

                <div className="">
                    <table >
                        <tbody>
                            <tr>
                                <td>Specs</td>
                            </tr>
                            <tr>
                                <td><p>Brand</p></td>
                                <td><p>{productData.brand}</p></td>
                            </tr>
                            <tr>
                                <td><p>Country Origin</p></td>
                                <td><p>{productData.countryOrigin}</p></td>
                            </tr>
                            <tr>
                                <td><p>Finish</p></td>
                                <td><p>{productData.fantasyColor}</p></td>
                            </tr>
                            <tr>
                                <td><p>Neck Wood</p></td>
                                <td><p>{productData.neckWood}</p></td>
                            </tr>
                            <tr>
                                <td><p>Orientation</p></td>
                                <td><p>{productData.orientation}</p></td>
                            </tr>
                            <tr>
                                <td><p>Strings</p></td>
                                <td><p>{productData.strings}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default ProductPage