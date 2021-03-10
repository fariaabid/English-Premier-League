import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {
  const { strTeamBadge, strTeam, strSport } = props.team;
  return (
        <div className="col-md-4 text-center">
      <Card style={{ width: "300px",height:'370px',backgroundColor:'white'}} className="my-5">
        <Card.Img variant="top" style={{ width: "200px",height:'200px'}} className="img-fluid pt-5 rounded mx-auto d-block" src={strTeamBadge} />
        <Card.Body>
          <Card.Title >{strTeam}</Card.Title>
          <Card.Text>{strSport}</Card.Text>
          <Button variant="primary"> Explore   <FontAwesomeIcon icon={faArrowRight} /> </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Teams;
