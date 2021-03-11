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
import {
  faFlag,
  faFutbol,
  faMapMarkerAlt,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import male from "../../male.png";
import female from "../../female.png";

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
      <div style={{backgroundColor:"#700387"}}>
        <div className="container ">
            <br/>
            <br/>
            <br/>
          <div>
            <div className="row d-flex justify-content-center" style={{ borderRadius: "25px" ,backgroundColor:"#140480"}}>
              <div className="col-md-7 ">
                <h5 className="team--information-details-section mt-3"><strong>{strTeam}</strong></h5>
                <br/>
                <div>
                <p className="team--information-details-section"><FontAwesomeIcon icon={faMapMarkerAlt} />    <strong>Founded: </strong>{intFormedYear}</p>
                <p className="team--information-details-section"><FontAwesomeIcon icon={faFlag} />    <strong>Country: </strong>{strCountry}</p>
                <p className="team--information-details-section"><FontAwesomeIcon icon={faFutbol} />     <strong>Sport Type: </strong>{strSport}</p>
                <p className="team--information-details-section"><FontAwesomeIcon icon={faMars} />   <strong>Gender: </strong>{strGender}</p>
                </div>
              </div>
              <div className="col-md-5 d-flex justify-content-center">
                {strGender === "Male" ? (
                  <img
                    className=" img-fluid w-100 my-3 rounded ms-5 d-block "
                    src={male}
                    alt=""
                  />
                ) : (
                  <img
                    className="img-fluid w-100 my-3 rounded mx-auto d-block  "
                    src={female}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <p style={{color:"white"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            porro quis! Cum odit maiores voluptate deserunt praesentium alias
            similique cumque? Non, doloribus quo quod provident ad possimus
            quasi tempora dolorum distinctio deserunt. Voluptatem architecto
            doloremque deserunt laborum commodi quibusdam dicta, molestias
            provident eos iusto. Neque rem eligendi quis distinctio impedit!
          </p>
          <br/>
          <p style={{color:"white"}}>{strDescriptionEN}</p>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <a
            target="_"
            href={`https://${strFacebook}`}
            className="social-icon facebook"
          >
            <FontAwesomeIcon icon={faFacebook} className="facebook" />
          </a>
          <a
            target="_"
            href={`https://${strTwitter}`}
            className="social-icon twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            target="_"
            href={`https://${strInstagram}`}
            className="social-icon instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            target="_"
            href={`https://${strYoutube}`}
            className="social-icon youtube"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
