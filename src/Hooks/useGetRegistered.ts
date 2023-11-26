import { useState } from "react";
import axios from "axios";
import { API } from "../Constants/API";
import { UsersType } from "../types/types";

export const useGetRegistered = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState<UsersType[]>([]);

  const getRegistered = async () => {
    const formData = new FormData();
    try {
      setIsLoading(true);
      await axios
        .post(API.auth.registered, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(async ({ data }) => {
          setIsLoading(false);
          setResult(data?.data?.rows);
          return data;
        });
    } catch (e: any) {
      setIsLoading(false);
      setError(e);
      return e;
    }
  };

  return {
    getRegistered,
    result,
    isLoading,
    error,
  };
};
