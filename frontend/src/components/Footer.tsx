import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { Button } from "./ui/button"

const Footer = () => {

    const year = new Date().getFullYear();
    return (

        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="text-2xl"><img src="/assets/GuitarStoreLogo.png" width={64} className="bg-(--color-item-background) rounded-full" alt="Website-Logo" />
                            </div>
                            <span className="text-xl font-bold  text-(--color-primary-text) dark:text-blue-400 block">
                                RiffStorm Overdrive
                            </span>
                        </div>
                        <p className="text-pretty">
                            Your destination for the best electric guitars and musical equipment.
                            Connecting musicians with the perfect instruments for over 10 years.
                        </p>
                        <div className="flex space-x-2 group">
                            <Button variant="default" size="icon">
                                <Facebook className="h-4 w-4" />
                            </Button>
                            <Button variant="default" size="icon">
                                <Instagram className="h-4 w-4" />
                            </Button>
                            <Button variant="default" size="icon">
                                <Twitter className="h-4 w-4" />
                            </Button>
                            <Button variant="default" size="icon">
                                <Youtube className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-(--color-primary-text) font-semibold">Products</h3>
                        <ul className="text-(--color-secondary-text) space-y-2">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Guitars
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Amplifiers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Effects Pedals
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Accessories
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Strings
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Cables
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-(--color-primary-text) font-semibold">Support</h3>
                        <ul className="text-(--color-secondary-text) space-y-2">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Shipping and Returns
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Warranty
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Contacto
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Terms and Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-(--color-primary-text) font-semibold">Contact</h3>
                        <div className="text-(--color-secondary-text) space-y-3">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>info@electricguitarstore.com</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1" />
                                <span>
                                    123 Music Street
                                    <br />
                                    Los Angeles, CA 90210
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">© {year} ElectricGuitar Store. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Terms
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer