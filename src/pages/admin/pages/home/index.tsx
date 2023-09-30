import { useEffect, useState } from "react";
import AllGoldenSportsRequestsTable from "./golden-sports/allRequestsTable";
import AllSommerCupRequestsTable from "./sommer-cup/allRequestsTable";
import AllWinterCupRequestsTable from "./winter-cup/allRequestsTable";
import useCheckToken from "../../hooks/useCheckToken";
import TabsList from "../../components/Tabs/TabsList";
const Home = () => {
  const checkToken = useCheckToken();
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <>
      <TabsList
        tabsContainerSx={{
          backgroundColor: "#f9f9f9",
        }}
        tabIndicatorSx={{
          backgroundColor: "black",
        }}
        tabSx={{
          color: "black",
          "&.Mui-selected": {
            color: "black",
            fontWeight: "700",
          },
        }}
        tabs={[
          {
            children: <AllGoldenSportsRequestsTable />,
            title: "Golden Sports",
          },
          {
            children: <AllSommerCupRequestsTable />,
            title: "Sommer Cup",
          },
          {
            children: <AllSommerCupRequestsTable />,
            title: "EuroChallnege",
          },
          {
            children: <AllWinterCupRequestsTable />,
            title: "WinterCup",
          },
        ]}
        initialValue={0}
      ></TabsList>
    </>
  );
};
export default Home;
