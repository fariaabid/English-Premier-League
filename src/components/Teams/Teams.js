import React from "react";
import { Button, Card } from "react-bootstrap";

const Teams = (props) => {
  const { strTeamBadge, strTeam, strSport } = props.team;
  return (
    <div className="col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={strTeamBadge} />
        <Card.Body>
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>{strSport}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Teams;
