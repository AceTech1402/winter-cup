import { useState } from "react";
import axios from "axios";
import adminAPI from "../../constants/admin-API";
interface LoginApi {
  username: string;
  password: string;
}
const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [result, setResult] = useState<any>(null);
  const login = async ({ username, password }: LoginApi, callback?: any) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    try {
      setIsLoading(true);
      await axios
        .post(adminAPI.login, formData, {
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
    login,
    result,
    isLoading,
    error,
  };
};
export default useLogin;
