import { Mail, Mailbox } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const Newsletter = () => {
    return (
        <section className="py-12">
            <div className="bg-green-700/10 dark:bg-(--color-item-background) p-12 rounded-2xl container mx-auto flex flex-col items-center">
                <div className="flex flex-col items-center text-center pb-8 ">
                    <div className="p-3 rounded-full bg-green-900/20 dark:bg-neutral-600/20">
                        <Mail className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Join Our <span className="dark:text-blue-500">Community</span></h1>
                    <h3 className="text-xl font-semibold">Receive exclusive deals, new releases, and expert advice straight to your inbox.</h3>
                </div>

                <div className="flex space-x-2 pb-8">
                    <Input type="email" placeholder="email@site.com" className="bg-(--color-background) ring-3" />
                    <Button className="bg-(--color-primary-button) text-white hover:bg-(--color-primaryButton-hover)"> <span><Mailbox /></span> Subscribe</Button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm mb-4 font-semibold">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-(--color-primary) dark:bg-blue-500 rounded-full" />
                        <span className="">Exclusive Sales</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-(--color-primary) dark:bg-yellow-500 rounded-full" />
                        <span className="">New Products</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-(--color-primary) dark:bg-purple-500 rounded-full" />
                        <span className="">Tips from Experts</span>
                    </div>

                </div>

                <p className="text-sm">No spam. Cancel subscription at any moment</p>


            </div>
        </section>
    )
}

export default Newsletter