import axios from "axios";
import { useState } from "react";
import { RegisterApi } from "../types/types";
import { API } from "../Constants/API";

interface popupStatusType {
  result_req: number;
  showPopup: boolean;
}

const useRegister = () => {
  const [sending, setSending] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState(null);
  // const [result_req, setResult_req] = useState<number>(0);
  // const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupStatus, setPopupStatus] = useState<popupStatusType>({
    result_req: 0,
    showPopup: false,
  });

  const changeShowPopupStatus = () => {
    // setShowPopup(false);
    setPopupStatus((prev) => ({
      result_req: prev.result_req,
      showPopup: false,
    }));
  };

  const handle_register = async (data: RegisterApi) => {
    // const formData = new FormData();
    // formData.append("f_name", f_name);
    // formData.append("l_name", l_name);
    // formData.append("mobile", mobile);
    // formData.append("address", address);
    // formData.append("email", email);
    // formData.append("zip_code", zip_code);
    // formData.append("city", city);
    // formData.append("team_name", team_name);

    try {
      setSending(true);
      await axios
        .post(API.auth.addRequest, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.result) {
            setSending(false);
            if (res.data.data) {
              setMessage(res.data.data.message);
              // setResult_req(res.data.data.email_sended ? 1 : 0);
              // setShowPopup(true);
              setPopupStatus({
                result_req: 1,
                showPopup: true,
              });
            }
          }
        });
    } catch (e: any) {
      setSending(false);
      setMessage(e);
      setPopupStatus({
        result_req: 2,
        showPopup: true,
      });
    }
  };

  return {
    handle_register,
    changeShowPopupStatus,
    sending,
    message,
    popupStatus,
  };
};

export default useRegister;
