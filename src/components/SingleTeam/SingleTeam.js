import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const SingleTeam = (props) => {
  const { strTeamBadge, strTeam, strSport,idTeam} = props.team;
  return (
        <div className="col-md-4 d-flex justify-content-center">
      <Card style={{ width: "300px",height:'370px',backgroundColor:'#e3f390',borderRadius:"20px"}} className="my-5">
        <Card.Img variant="top" style={{ width: "200px",height:'200px'}} className="img-fluid pt-5 rounded mx-auto d-block" src={strTeamBadge} />
        <Card.Body className="text-center">
          <Card.Title >{strTeam}</Card.Title>
          <Card.Text>{strSport}</Card.Text>
          <Button as={Link} to={`/team/${idTeam}`} style={{backgroundColor:"#034250"}}> Explore   <FontAwesomeIcon icon={faArrowRight} /> </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleTeam;
