import { useState, useCallback } from "react";
import { PrivateAxios } from "../api/AxiosInstance";

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({
        pageIndex: 1,
        totalPages: 1,
        totalResults: 1,
        limit: 12,
    });

    const fetchDataByUrl = useCallback(async (url) => {
        try {
            setIsLoading(true);
            const response = await PrivateAxios.get(url);
            setData(response?.data?.data);
            setPagination(response.data.pagination);
            setError(null);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        data,
        error,
        fetchDataByUrl,
        pagination,
        setPagination,
        setData,
    };
};

export default useFetch;
