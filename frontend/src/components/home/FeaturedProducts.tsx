import ProductCards from "@/components/products/ProductCards";


interface Props {
    categoryFilter: 'guitar' | 'amp' | 'pedal' | 'accessory';
    mainTitle: string;
    featuredText: string;
}


const FeaturedProducts = ({ categoryFilter, mainTitle, featuredText }: Props) => {

    return (
        <section className='py-12 p-6'>
            <div className="flex flex-col items-center">
                <div className="text-center mb-12">
                    <h1 className="dark:text-white text-4xl font-bold mb-6">Featured <span className="text-(--color-primary-text) dark:text-blue-500">{mainTitle}</span> </h1>
                    <p className="dark:text-white text-xl font-semibold">
                        {featuredText}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <ProductCards categoryFilter={categoryFilter} topSellerFilter={true} />
                </div>


                {/* 
                     <div className="">
                    <Carousel className="">
                        <CarouselContent>
                            <CarouselItem className="">
                                <ProductCardsGrid categoryFilter={categoryFilter} />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                */}
            </div>
        </section>
    )
}

export default FeaturedProducts