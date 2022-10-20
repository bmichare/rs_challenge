/**
 * @file Renders card for an NBA team
 * @param Team Team Data from NBA API 
 * @param setSelectedCity Invoked upon click. Sets state within TeamsPage   
 */

import React from "react";
import { Card } from "@mui/material";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

import "./styles/Team.css"

const Team = (props) => {
  return (
    <Card
      title="teamCard"
      variant="outlined"
      className="teamCard"
      sx={{
        "borderRadius": "10px"
      }}
      onClick={() => props.setSelectedCity(props.team.city)}
    >
      <SportsBasketballIcon title="basketballIcon" />
      <p>{props.team.full_name}</p>
    </Card >
  );
}

export default Team;