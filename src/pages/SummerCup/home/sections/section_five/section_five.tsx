import { useEffect } from "react";
import TeamsItem from "../../../../../Components/teams_item/teams_item";
import classes from "./section_five.module.css";
import { useGetRegistered } from "../../../../../Hooks/useGetRegistered";

const registeredTeams: any[] = [
  // { id: "1", title: "Racing Vienna", flag: "" },
  // { id: "2", title: "FC Kpn", flag: "" },
  // { id: "3", title: "Mountain Movers Salzburg", flag: "" },
  // { id: "4", title: "Eagels United", flag: "" },
  // { id: "5", title: "HC Hazara", flag: "" },
  // { id: "6", title: "Posavina", flag: "" },
  // { id: "7", title: "Vienna Kickers", flag: "" },
  // { id: "8", title: "FC Chili", flag: "" },
  // { id: "8", title: "SV BellinGool", flag: "" },
  // { id: "9", title: "NK Ravne Brcko", flag: "" },
  // { id: "10", title: "FC Joga Bonito", flag: "" },
  // { id: "11", title: "OÖ - Schiedsrichter", flag: "" },
  // { id: "12", title: "SV-Rottenstein", flag: "" },
  // { id: "13", title: "Fikirtepe", flag: "" },
  // { id: "14", title: "FC Nankatsu", flag: "" },
  // { id: "15", title: "Delay Sports Traiskirchen", flag: "" },
  // { id: "16", title: "Wheella", flag: "" },
  // { id: "17", title: "Turbine Maja", flag: "" },
  // { id: "18", title: "FC Zukunft", flag: "" },
  // { id: "19", title: "Delay Sports Traiskirchen", flag: "" },
  // { id: "20", title: "Red Budenzauber", flag: "" },
  // { id: "21", title: "San Marino", flag: "" },
  // { id: "22", title: "Raiffeisenbank Region Feldbach", flag: "" },
  // { id: "23", title: "MA Holding", flag: "" },
  // { id: "24", title: "FC Milano", flag: "" },
  // { id: "25", title: "Dinamo Salzburg", flag: "" },
  { id: "26", title: "FC West", flag: "" },
  { id: "27", title: "Avengers FC", flag: "" },
  { id: "28", title: "FK Balkan Tribuns", flag: "" },
  { id: "29", title: "Royal Bombers", flag: "" },
  { id: "30", title: "FC Prototyp", flag: "" },
  { id: "31", title: "UFC Schützen", flag: "" },
  { id: "32", title: "Leoben Champions", flag: "" },
  { id: "33", title: "MA Holding", flag: "" },
  { id: "34", title: "FC Kraste", flag: "" },
  { id: "35", title: "Icon’s 58", flag: "" },
  { id: "36", title: "FC Transilvania", flag: "" },
  { id: "37", title: "SC Gauchos", flag: "" },
  { id: "38", title: "MS Bau", flag: "" },
  { id: "39", title: "Team Ad", flag: "" },
  { id: "40", title: "SV Mahdi", flag: "" },
  { id: "41", title: "Bratislava Lions", flag: "" },
  { id: "42", title: "Neue spiele Verein gesucht", flag: "" },
  { id: "43", title: "SG Benzin", flag: "" },
  { id: "44", title: "Bolzplatzjungs", flag: "" },
  { id: "45", title: "KSV Tabasum", flag: "" },
  { id: "46", title: "Team Crokos", flag: "" },
  { id: "47", title: "Bulgaria", flag: "" },
  { id: "48", title: "Bayik FC", flag: "" },
  { id: "49", title: "Nessi123", flag: "" },
];

const SectionFive: React.FC = () => {
  const { getRegistered, result } = useGetRegistered();

  useEffect(() => {
    getRegistered();
  }, []);

  console.log(result);

  const apiRegisteredTeams = result.map((user, i) => {
    return {
      id: i,
      title: user.team_name,
    };
  });

  return (
    <div className={classes.section_five_wrapper}>
      <div className={classes.section_five}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h1>Angemeldete Teams</h1>
          </div>
          <div className={classes.items}>
            <TeamsItem teams={[...registeredTeams, ...apiRegisteredTeams]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
