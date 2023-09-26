import { useState } from "react";
import axios from "axios";
import { API } from "../Constants/API";
import { CountryType } from "../types/types";

export const useGetCountries = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState<CountryType[]>([]);
  
  const getCounries = async () => {
    const formData = new FormData();
    try {
      setIsLoading(true);
      await axios
        .post(API.auth.countryNames, formData, {
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
    getCounries,
    result,
    isLoading,
    error,
  };
};