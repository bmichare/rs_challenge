import { React } from "react";
import { Card } from "@mui/material";
import basketball from "../assets/basketball.png";
import "./styles/Team.css"

const Team = (props) => {
  return (
    <Card
      variant="outlined"
      className="teamCard"
      sx={{
        "border-radius": "10px"
      }}
      onClick={() => props.setSelectedCity(props.team.city)}
    >
      <img src={basketball} className="basketball" alt="basketball" />
      <p>{props.team.full_name}</p>
    </Card >
  );
}

export default Team;