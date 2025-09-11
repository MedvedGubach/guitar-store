import { useState, useEffect } from "react";
import axios from 'axios';
import type { ProductInfo } from "@/interfaces/ProductInfo";

const useProducts = () => {

    const [data, setData] = useState<ProductInfo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://guitar-store-api.onrender.com/products');
                setData(response.data);
            } catch (error) {
                setError(error as null);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

    }, []);
    return { data, loading, error };

}

export default useProducts