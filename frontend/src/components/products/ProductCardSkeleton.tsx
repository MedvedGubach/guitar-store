import { Card, CardContent } from "@/components/ui/card";

const ProductCardSkeleton = () => {
    return (
        <Card className="bg-(--color-item-background) max-w-sm rounded-xl shadow-md overflow-hidden">
            {/* Image */}
            <div className="h-64 w-full bg-gray-300 dark:bg-gray-700 animate-pulse" />

            <CardContent className="space-y-4 mt-4">
                {/* Title */}
                <div className="h-6 w-2/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />

                {/* Description */}
                <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                </div>

                {/* Price */}
                <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"
                        />
                    ))}
                </div>

                {/* Botón */}
                <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse" />
            </CardContent>
        </Card>
    );

}

export default ProductCardSkeleton