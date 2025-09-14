import { useLocation } from "react-router";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { BadgeAlert, BadgeCheck, ShoppingBag, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ProductDescription from "@/components/products/ProductDescription";

const ProductPage = () => {
    const location = useLocation();
    const productData = location.state || {};
    const [amount, setAmount] = useState<number>(1);

    if (!productData) { return <div>Loading...</div>; };

    return (
        <main className="p-24">
            <div className="container mx-auto flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 mb-12">
                    <div className="max-w-2xl">
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
                        <div>
                            <h2 className="text-xl font-thin uppercase" >{productData.brand}</h2>
                            <h3 className="text-(--color-primary-text) text-4xl font-black mt-4 mb-4">{productData.name}</h3>
                            <h3 className="text-(--color-secondary-text) dark:text-yellow-500 font-black text-4xl mb-6">${productData.price}</h3>
                            <hr className="border-b-1 border-neutral-300 dark:border-neutral-600 mb-6" />
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-12">
                            <Button className="h-14 rounded-full font-bold" variant={'primary'}>Add to Cart <ShoppingCart /></Button>
                            <Button className="h-14 rounded-full font-bold" variant={'primary'}>Buy Now <ShoppingBag /></Button>
                        </div>

                        <div className="mb-6 text-center">
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


                <div className="justify-end-safe">
                    <Accordion type="single" collapsible className="p-2 rounded-2xl max-w-xl ">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Description</AccordionTrigger>
                            <AccordionContent>
                                <ProductDescription productData={productData} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
        </main>
    )
}

export default ProductPage