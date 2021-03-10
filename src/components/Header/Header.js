import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';

const Header = () => {
    const [allTeams,setAllTeams] = useState([])

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
        fetch(url)
        .then(response => response.json())
        .then(data => setAllTeams(data.teams))
    })
    return (
        <div className="container">
            <div className="row banner">
                <h1>English Premier League</h1>
            </div>
            <div className="row">
                {
                    allTeams.map(team => <Teams team={team}></Teams>)
                }
            </div>
        </div>
    );
};

export default Header;