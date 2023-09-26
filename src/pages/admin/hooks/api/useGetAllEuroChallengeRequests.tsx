import { useState } from "react";
import axios from "axios";
import adminAPI from "../../constants/admin-API";
import useToken from "../useToken";
import useCheckToken from "../useCheckToken";
interface RequestPlayersType {
  pagination?: { no_per_page: number; page_no: number };
  // player_idcard_status?: "0" | "1" | "2" | "3" | null;
  // player_status?: "0" | "1" | null;
}
const useGetAllEuroChallengeRequests = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [result, setResult] = useState<any>(null);
  const token = useToken();
  const checkToken = useCheckToken();
  const getAllEuroChallengeRequests = async (
    options?: RequestPlayersType,
    callback?: any
  ) => {
    const formData = new FormData();
    // if (options?.player_idcard_status) {
    //   formData.append("player_idcard_status", options.player_idcard_status);
    // }
    // if (options?.player_status) {
    //   formData.append("player_status", options.player_status);
    // }
    if (options?.pagination) {
      formData.append("pagination", JSON.stringify(options.pagination));
    }

    try {
      setIsLoading(true);
      await axios
        .post(adminAPI.getAllRequests.euroChallenge, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          checkToken(data.data.exception);
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
    getAllEuroChallengeRequests,
    result,
    isLoading,
    error,
  };
};
export default useGetAllEuroChallengeRequests;
