// import Layout from "./Components/Layout"
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Layout from "./Components/Layout";
import CommingSoon from "./pages/coming-soon/comingSoon";
import AdminRouter from "./pages/admin/router";

const Router = () => {
  const EuroChallenge = lazy(() => import("./pages/SummerCup/home/home"));
  const Register = lazy(() => import("./pages/SummerCup/register/register"));
  const SportsPlatz = lazy(() => import("./pages/SummerCup/sports-platz/sportsPlatz"));
  const LayoutSommerCup = lazy(() =>
    import("./Components/layout-summercup/layoutSommerCup")
  );

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LayoutSommerCup />}>
          <Route index element={<EuroChallenge />} />
          <Route path="register" element={<Register />} />
          <Route path="coming-soon" element={<CommingSoon />} />
          {/* <Route path="sports-platz" element={<SportsPlatz />} /> */}
        </Route>
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </Suspense>
  );
};

export default Router;