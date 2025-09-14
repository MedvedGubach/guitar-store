import type { ProductInfo } from "@/interfaces/ProductInfo"
import { Fragment } from "react/jsx-runtime";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const ProductDescription = ({ productData }: ProductInfo) => {

    console.log(productData);

    return (
        <Fragment>

            <div className="bg-(--color-item-background) rounded-sm p-6 mb-6">
                <p className="text-pretty">{productData.desc}</p>
            </div>
            
            {
                productData.category === 'guitar' ?

                    <Fragment>
                        <Table>
                            <TableCaption>{productData.name} Detailed Specifications.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-(--color-primary-text) dark:text-blue-500 font-black">Specifications</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-bold">Brand</TableCell>
                                    <TableCell className="text-right">{productData.brand}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-bold">Pickups</TableCell>
                                    <TableCell className="text-right">{productData.pickups.config}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-bold">Finish</TableCell>
                                    <TableCell className="text-right">{productData.fantasyColor}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-bold">Neck Wood</TableCell>
                                    <TableCell className="text-right">{productData.neckWood}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-bold">Orientation</TableCell>
                                    <TableCell className="text-right">{productData.orientation}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-bold">Strings</TableCell>
                                    <TableCell className="text-right">{productData.strings}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Fragment>

                    : productData.category === 'amp' ?

                    <Fragment>
                    <Table>
                        <TableCaption>{productData.name} Detailed Specifications.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-(--color-primary-text) dark:text-blue-500 font-black">Specifications</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-bold">Brand</TableCell>
                                <TableCell className="text-right">{productData.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold">Type</TableCell>
                                <TableCell className="text-right">{productData.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold">Power</TableCell>
                                <TableCell className="text-right">{productData.power}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold">Speakers</TableCell>
                                <TableCell className="text-right">{productData.speakers}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold">Reverb</TableCell>
                                <TableCell className="text-right">{productData.reverb === true ? <span>Yes</span> : <span>No</span> }</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-bold">USB</TableCell>
                                <TableCell className="text-right">{productData.usb === true ? <span>Yes</span>  : <span>No</span>}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Fragment>


                    : productData.category === 'pedal' ?

                        <Fragment>
                            <Table>
                                <TableCaption>{productData.name} Detailed Specifications.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-(--color-primary-text) dark:text-blue-500 font-black">Specifications</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-bold">Brand</TableCell>
                                        <TableCell className="text-right">{productData.brand}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-bold">Effect</TableCell>
                                        <TableCell className="text-right">{productData.effect}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-bold">Features</TableCell>
                                        <TableCell className="text-right">{productData.features.join(', ')}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-bold">Power</TableCell>
                                        <TableCell className="text-right">{productData.power}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-bold">Dimensions</TableCell>
                                        <TableCell className="text-right">{productData.dimensions}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Fragment>

                        :
                        null
            }


        </Fragment>
    )
}

export default ProductDescription