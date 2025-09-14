// import { Search } from "lucide-react"
import { Badge, Heart, ShoppingCart, User, XIcon } from "lucide-react"
import ThemeSwitch from "./ThemeSwitch"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Link } from "react-router";
import { useState } from "react";

const Navbar = () => {

    const [search, setSearch] = useState<string>('')

    const cartItems = 3;
    return (
        <header className="bg-(--color-navbar)/70 dark:border-b-neutral-800 dark:border-1 backdrop-blur sticky top-0 z-50 py-8 w-full">
            <nav>
                <div className="container mx-auto flex justify-between items-center">

                    <div className="">
                        <Link to="/" className="text-2xl text-(--color-text-primary)">
                            <img src="/assets/GuitarStoreLogo.png" width={64} className="bg-(--color-item-background) rounded-full" alt="Website-Logo" />
                        </Link>
                    </div>

                    <div className="text-white font-bold space-x-8">
                        <Link to="">Electric Guitars</Link>
                        <Link to="">Acoustic Guitars</Link>
                        <Link to="">Amplifiers</Link>
                        <Link to="">Effects</Link>
                    </div>

                    <div className="relative w-full max-w-sm">
                        <Input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Products" className="bg-(--color-item-background)" />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 bg-(--color-background)  text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                            onClick={() => { setSearch(''); }}
                        >
                            <XIcon className="h-4 w-4" />
                            <span className="sr-only">Clear</span>
                        </Button>
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