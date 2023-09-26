import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import useLogin from "../../hooks/api/useLogin";

const Login = () => {
  const { error, isLoading, login, result } = useLogin();
  const [showPass, setShowPass] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (form: any) => {
    login(
      {
        password: form.password,
        username: form.username,
      },
      (response: any) => {
        if (response.result) {
          localStorage.setItem("admin-token", response.data.token);
          navigate("/admin/");
        }
      }
    );
  };

  return (
    <>
      <div className="max-w-[350px] mx-auto my-10 flex flex-col ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col my-4 ">
            <label>Username</label>
            <input
              {...register("username", { required: "fill this field" })}
              type="text"
              className="px-3 py-2 w-full"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col my-4">
            <label>Password</label>
            <div className="relative ">
              <input
                {...register("password", { required: "fill this field" })}
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="px-3 py-2 w-full"
              />
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setShowPass((s) => !s)}
              >
                {!showPass && <VisibilityIcon />}
                {showPass && <VisibilityOffIcon />}
              </div>
            </div>
          </div>
          <div className="text-red my-4">
            {!result?.result && result?.data?.message}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="border-2 rounded-md py-1 px-3 border-black"
          >
            {isLoading ? (
              <CircularProgress
                sx={{
                  width: "15px !important",
                  height: "15px !important",
                  color: "black",
                }}
              />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
