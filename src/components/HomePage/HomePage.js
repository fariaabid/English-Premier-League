import React, { useEffect, useState } from "react";
import Teams from "../SingleTeam/SingleTeam";
import "./HomePage.css";


const HomePage = () => {
  const [allTeams, setAllTeams] = useState([]);

  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllTeams(data.teams));
  });
  return (
    <div>
      <div className=" banner">
        <h1 className="text-center bannerTitle"><span style={{color:"#240e31"}}>English Premier League</span></h1>
      </div>
      <div style={{backgroundColor:'#240e31'}}>
      <div className="container">
        <div className="row">
          {allTeams.map((team) => (
            <Teams team={team}></Teams>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
