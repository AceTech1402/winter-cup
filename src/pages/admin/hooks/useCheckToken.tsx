import { useNavigate } from "react-router-dom";

const useCheckToken = () => {
  const navigate = useNavigate();
  const checkToken = (exception?: string) => {
    if (
      exception?.toLowerCase().includes("token") ||
      !localStorage.getItem("admin-token")
    ) {
      localStorage.removeItem("admin-token");
      navigate("/admin/login");
    }
  };
  return checkToken;
};
export default useCheckToken;
