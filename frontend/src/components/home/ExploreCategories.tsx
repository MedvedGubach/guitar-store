
import { Card, CardContent } from "@/components/ui/card"
import { Fragment } from "react/jsx-runtime"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
const ExploreCategories = () => {


    const categories = [
        { name: 'Guitars', description: 'From classic to modern', image: 'https://res.cloudinary.com/dvqnxq5g5/image/upload/v1757186711/electric-guitars-collection_dznagf.png', count: '100+ models', categoryFilter: 'guitar' },
        { name: 'Amplifiers', description: 'Power up your sound', image: 'https://res.cloudinary.com/dvqnxq5g5/image/upload/v1757186711/guitar-amplifiers-collection_z4ybuo.png', count: '50+ models', categoryFilter: 'amp' },
        { name: 'Pedals', description: 'Make your unique tone', image: 'https://res.cloudinary.com/dvqnxq5g5/image/upload/v1757186711/guitar-effects-pedals-collection_eg18ch.png', count: '+100 effects', categoryFilter: 'pedal' },
        { name: 'Accessories', description: 'Everything you need', image: 'https://res.cloudinary.com/dvqnxq5g5/image/upload/v1757186712/guitar-accessories-collection_ylo1fs.png', count: '300+ products', categoryFilter: 'accessory' },
    ]

    return (
        <section className="mb-12">
            <div className="container mx-auto items-center">
                <div className="text-center mb-12">
                    <h1 className="text-(--color-primary-text) text-4xl font-bold mb-6">Shop by <span className="dark:text-yellow-500">Category</span></h1>
                    <h2 className="text-xl font-semibold">Find exactly what you're looking for</h2>
                </div>

                <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
                    {categories.map((category) => (
                        <Fragment key={category.name}>
                            <Card
                                className="bg-(--color-item-background) group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                            >
                                <CardContent className="p-0">
                                    <div className="relative">
                                        <img
                                            src={category.image || "/placeholder.svg"}
                                            alt={category.name}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <h3 className="font-semibold text-lg text-balance mb-1">{category.name}</h3>
                                            <p className="text-sm text-white/80 mb-2">{category.description}</p>
                                            <p className="text-xs text-white/60">{category.count}</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <Link to={`/all-products/${category.categoryFilter}`} state={category.categoryFilter}>
                                            <Button variant="ghost" className="w-full group justify-between">
                                                Explore
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </Fragment>
                    ))
                    }
                </div>
            </div>
        </section >
    )
}

export default ExploreCategories