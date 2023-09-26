import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import "./index.css";
const AdminRouter = () => {
  return (
    <>
      <div className="admin-main">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </div>
    </>
  );
};
export default AdminRouter;
