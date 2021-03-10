import React, { useEffect, useState } from "react";
import Teams from "../Teams/Teams";
import "../Header/Header.css";


const Header = () => {
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
        <h1 className="text-black text-center bannerTitle">English Premier League</h1>
      </div>
      <div style={{backgroundColor:'#00695f'}}>
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

export default Header;
