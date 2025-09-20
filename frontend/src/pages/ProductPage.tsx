import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ProductDescription from "@/components/products/ProductDescription";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { BadgeAlert, BadgeCheck, ShoppingBag, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { ProductInfo } from "@/interfaces/ProductInfo";

const ProductPage = () => {
    const location = useLocation();
    const productData = location.state || {};
    const [amount, setAmount] = useState<number>(1);
    const [items, setItems] = useState<ProductInfo[]>([]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(items));
    }, [items])

    const addToCart = (product: ProductInfo) => {
        setItems(([...items, product]))
    }

    const increaseAmount = () => {
        if (amount === 10) { return; }
        setAmount(amount + 1);
    }

    const decreaseAmount = () => {
        if (amount === 1) { return; }
        setAmount(amount - 1);
    }


    if (!productData) { return <div>Loading...</div> };

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
                        <div className="flex flex-col gap-4 mb-8">
                            <span className="uppercase text-sm tracking-widest text-neutral-500">{productData.brand}</span>
                            <h1 className="text-4xl font-extrabold text-(--color-primary-text)">{productData.name}</h1>
                            <p className="text-3xl font-bold text-yellow-500">${productData.price}</p>
                        </div>

                        <hr className="border-b-1 border-neutral-300 dark:border-neutral-800 mb-6" />


                        <div className="space-y-4 p-6 bg-(--color-item-background) rounded-xl shadow-lg">
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-2">
                                    <Button size="icon" onClick={() => decreaseAmount()}>-</Button>
                                    <Input type="number" value={amount} className="w-16 text-center" />
                                    <Button size="icon" onClick={() => increaseAmount()}>+</Button>
                                </div>
                                {productData.inStock
                                    ? <span className="flex items-center text-green-600 font-semibold"><BadgeCheck className="mr-1" />In Stock</span>
                                    : <span className="flex items-center text-red-600 font-semibold"><BadgeAlert className="mr-1" />No Stock</span>
                                }
                            </div>
                            <Button onClick={() => addToCart(productData)} className="w-full h-14 rounded-full font-bold" variant="primary"><ShoppingCart className="mr-2" />Add to Cart</Button>
                            <Button className="w-full h-14 rounded-full font-bold" variant="secondary"><ShoppingBag className="mr-2" />Buy Now</Button>
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