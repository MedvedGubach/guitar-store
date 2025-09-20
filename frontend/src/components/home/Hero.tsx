import HeroGradient from "./ui/HeroGradientDark";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const Main = () => {

    const heroImages = [
        { url: 'https://res.cloudinary.com/dvqnxq5g5/image/upload/v1756602166/HeroImage_b8uejb.webp', name: 'HeroImage1' },
        { url: 'https://res.cloudinary.com/dvqnxq5g5/image/upload/v1754797842/GuitarAndAmp_h9dhnx.webp', name: 'HeroImage2' },
        { url: 'https://res.cloudinary.com/dvqnxq5g5/image/upload/v1754797843/KemperProfiler_bfmzf1.webp', name: 'HeroImage3' }
    ]

    return (
        <>
            <section>
                <div className="container mx-auto flex flex-col items-center p-12 md:p-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12">
                        {/* <HeroGradient /> */}

                        <div className="text-center mt-26">
                            <h1 className="text-5xl md:text-7xl font-black tracking-wider">
                                <span className="text-(--color-secondary-text) block">Find Your</span>
                                <span className="text-green-800 dark:bg-gradient-to-tr from-blue-700 via-indigo-600 to-purple-700 dark:text-transparent bg-clip-text block">Dream Guitar</span>
                            </h1>
                            <div className="mt-12 mb-8">
                                <p className="text-(--color-secondary-text) text-2xl font-bold">Discover our collection of premium guitars from vintage classics to modern innovations</p>
                                <p className="text-(--color-secondary-text) text-2xl font-bold">Find your perfect sound!</p>
                            </div>

                            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                                <div className="text-center">
                                    <div className="text-blue-600 text-2xl md:text-3xl font-bold mb-1">500+</div>
                                    <div className="text-(--color-secondary-text) font-medium text-sm uppercase tracking-wide">GUITARS</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-yellow-500 text-2xl md:text-3xl font-bold mb-1">+100</div>
                                    <div className="text-(--color-secondary-text) font-medium text-sm uppercase tracking-wide">BRANDS</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-purple-600 text-2xl md:text-3xl font-bold mb-1">10k+</div>
                                    <div className="text-(--color-secondary-text) font-medium text-sm uppercase tracking-wide">HAPPY MUSICIANS</div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <Carousel plugins={[Autoplay({ delay: 3000 })]}>
                                <CarouselContent>
                                    {heroImages.map((image) => (
                                        <CarouselItem key={image.name}>
                                            <img
                                                className="rounded-2xl shadow-2xl h-140 w-203 "
                                                src={image.url}
                                                alt={image.name}
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section >
        </>

    )
}

export default Main