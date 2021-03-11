import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import "./TeamDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const TeamDetails = () => {
  const { idTeam } = useParams();
  const [teamDetails, setTeamDetails] = useState([]);
  const {
    strTeamBadge,
    strTeam,
    intFormedYear,
    strCountry,
    strGender,
    strSport,
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strInstagram,
    strYoutube,
  } = teamDetails;
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
    )
      .then((response) => response.json())
      .then((data) => setTeamDetails(data.teams[0]));
  });
  return (
    <div>
      <div className="team-details-banner-section">
        <img
          src={strTeamBadge}
          className="img-fluid rounded mx-auto d-block"
          alt=""
        />
      </div>
      <div className="bg-danger">
        <div className="container">
          <br />
          <br />
          <br />
          <div className="hello bg-primary">
            <div className="row">
              <div className="col-md-6">
                <h5>{strTeam}</h5>
                <h5>Founded:{intFormedYear}</h5>
                <h5>Country:{strCountry}</h5>
                <h5>Sports Type:{strSport}</h5>
                <h5>Gender:{strGender}</h5>
              </div>
              <div className="col-md-6">
                <h3>logo</h3>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              porro quis! Cum odit maiores voluptate deserunt praesentium alias
              similique cumque? Non, doloribus quo quod provident ad possimus
              quasi tempora dolorum distinctio deserunt. Voluptatem architecto
              doloremque deserunt laborum commodi quibusdam dicta, molestias
              provident eos iusto. Neque rem eligendi quis distinctio impedit!
            </p>
          </div>
          <br />
          <br />
          <div>
            <p>{strDescriptionEN}</p>
          </div>
          <br />
          <br />
          <div className="w-75">
            <a href={`https://${strFacebook}`}>
              <FontAwesomeIcon icon={faFacebook} className="facebook" />
            </a>
            <a href={`https://${strTwitter}`}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={`https://${strInstagram}`}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href={`https://${strYoutube}`}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
