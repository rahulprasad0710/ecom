import { useState, useCallback } from "react";
import { PrivateAxios } from "../api/AxiosInstance";

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchDataByUrl = useCallback(async (url) => {
        try {
            setIsLoading(true);
            const response = await PrivateAxios.get(url);
            setData(response?.data?.data);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { isLoading, data, error, fetchDataByUrl };
};

export default useFetch;
