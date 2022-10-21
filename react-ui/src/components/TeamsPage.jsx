/**
 * @file Stateful component that renders all Team cards, 
 * WeatherDisplay, and button to request NBA teams
 */

import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import Team from "./Team"
import WeatherDisplay from "./WeatherDisplay";

import "./styles/TeamsPage.css";


function TeamsPage() {
  const [teamsList, setTeamsList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const getTeams = async () => {
    const res = await fetch("/api/nba");
    const teams = await res.json();
    setTeamsList(teams.data);
  };

  const teamMaker = (team) => (
    <Team
      team={team}
      key={team.abbreviation}
      setSelectedCity={setSelectedCity}
    />
  );

  return (
    <div className="TeamsPage">
      <WeatherDisplay selectedCity={selectedCity} />
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

