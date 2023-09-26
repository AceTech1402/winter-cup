import { useState } from "react";
import axios from "axios";
import adminAPI from "../../constants/admin-API";
import useToken from "../useToken";
interface AcceptType {
  requestId: string;
}
const useDeleteGoldenSportsRequest = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [result, setResult] = useState<any>(null);
  const token = useToken();
  const deleteGoldenSportsRequest = async (
    { requestId }: AcceptType,
    callback?: any
  ) => {
    const formData = new FormData();
    formData.append("goldensports_request__id", requestId);
    try {
      setIsLoading(true);
      await axios
        .post(adminAPI.deleteRequest.goldenSports, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setIsLoading(false);
          setResult(data);
          if (callback) {
            callback(data);
          }
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
    deleteGoldenSportsRequest,
    result,
    isLoading,
    error,
  };
};
export default useDeleteGoldenSportsRequest;
