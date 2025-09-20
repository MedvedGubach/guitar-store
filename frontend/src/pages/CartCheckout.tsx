import { useState, useEffect } from "react";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import type { ProductInfo } from "@/interfaces/ProductInfo";
import { Link } from "react-router";

const CartCheckout = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
            setCartItems(JSON.parse(storedItems));
        }
    }, []);

    console.log(cartItems)

    return (
        <>
            <main className="p-24">
                <div className="container mx-auto">
                    <div className="">
                        <Table>
                            <TableCaption>Your Cart Checkout.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Item</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead className="text-right">Total</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    cartItems.map((item: ProductInfo, index) => (
                                        <TableRow>
                                            <TableCell className="font-medium">
                                                <span className="flex items-center space-x-4">
                                                    <Link to={`/product/${item.name}`} state={cartItems[index]} className="cursor-pointer">
                                                        <img src={item.images[0]} alt={`${item.name}-Image`} className="h-28 rounded" />

                                                    </Link>
                                                    <p>{item.name}</p>
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-yellow-500">${item.price}</TableCell>
                                            <TableCell></TableCell>
                                            <TableCell className="text-right text-yellow-500">{item.price * 1}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>

                    <div className="">

                    </div>
                </div>
            </main>
        </>

    )
}

export default CartCheckout