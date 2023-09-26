import { useState } from "react";
import axios from "axios";
import adminAPI from "../../constants/admin-API";
const useLogOut = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [result, setResult] = useState<any>(null);
  const logOut = async (callback?: any) => {
    const formData = new FormData();
    try {
      setIsLoading(true);
      await axios
        .post(adminAPI.logOut, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          setIsLoading(false);
          setResult(data);
          callback(data);
          return data;
        });
    } catch (e: any) {
      setIsLoading(false);
      console.log(e);
      setError(e);
      return e;
    }
  };

  return {
    logOut,
    result,
    isLoading,
    error,
  };
};
export default useLogOut;
