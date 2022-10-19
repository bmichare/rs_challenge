import { React, useState } from "react";
import { Button } from "@mui/material";
import Team from "./Team"

import "./styles/TeamsPage.css";


function TeamsPage() {
  const [teamsList, setTeamsList] = useState([]);

  const getTeams = async () => {
    console.log(teamsList)
    const res = await fetch("/api/nba");
    const teams = await res.json();
    setTeamsList(teams.data);
  };

  const teamMaker = (team) => (
    <Team
      team={team}
      key={team.abbreviation}
    >
    </Team>
  );

  return (
    <div className="TeamsPage">
      <Button
        variant="contained"
        size="large"
        sx={{ m: 2, bgcolor: "#00003C" }}
        disableElevation
        onClick={getTeams}
      >
        NBA teams
      </Button>
      <div className="teamsContainer">
        {teamsList.map((team) => teamMaker(team))}
      </div>

    </div>
  );

}

export default TeamsPage;

