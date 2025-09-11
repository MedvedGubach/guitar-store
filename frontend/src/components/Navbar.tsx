// import { Search } from "lucide-react"
import { Badge, Heart, ShoppingCart, User } from "lucide-react"
import ThemeSwitch from "./ThemeSwitch"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Link } from "react-router";

const Navbar = () => {

    console.log(localStorage)
    const cartItems = 3;
    return (
        <header className="bg-(--color-navbar) dark:border-b-neutral-600 dark:border-2 sticky top-0 z-50 py-8 w-full">
            <nav>
                <div className="container mx-auto flex justify-between items-center">

                    <div className="">
                        <Link to="/" className="text-2xl text-(--color-text-primary)">
                            <img src="/assets/GuitarStoreLogo.png" width={64} className="bg-(--color-item-background) rounded-full" alt="Website-Logo" />
                        </Link>
                    </div>

                    <div className="text-white font-bold space-x-8">
                        <a href="" className="">Electric Guitars</a>
                        <a href="" className="">Acoustic Guitars</a>
                        <a href="" className="">Amplifiers</a>
                        <a href="" className="">Effects</a>
                    </div>

                    <div className="">
                        <Input className="bg-(--color-item-background)" type="search" placeholder="Search Products" />
                    </div>

                    <div className="">
                        <ThemeSwitch />
                    </div>

                    <div className="text-white flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="hidden md:flex">
                            <User className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hidden md:flex">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            {cartItems > 0 && (
                                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                                    {cartItems}
                                </Badge>
                            )}
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar