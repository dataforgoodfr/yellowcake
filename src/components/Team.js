import React from "react";

import Image from './Image'

import { FaTwitter,FaGithub,FaLinkedin} from "react-icons/fa";
import { AiOutlineMail} from "react-icons/ai";

import "./Team.css"

function Social(props){
    if (props.href === undefined | props.href === ""){
        return "";
    }
    else {
        let icon;
        if (props.label==="Github"){
          icon = <FaGithub/>
        } else if (props.label === "Linkedin"){
          icon = <FaLinkedin/>
        } else if (props.label === "Mail"){
          icon = <AiOutlineMail/>
        } else if (props.label === "Twitter"){
          icon = <FaTwitter/>
        }
        return (
          <a className="social-link" href={props.href} target="_blank" rel="noreferrer" aria-label={props.label}>{icon}</a>
        )
    }
}

function TeamProfile(props) {
  return (
    <div className="img-team-div">
        <Image className="img-team" src={props.data.image_url}/>
        <h5>{props.data.name}</h5>
        <p>{props.data.role}</p>
        <p>
          <Social label="Mail" href={props.data.mail}/>
          <Social label="Linkedin" href={props.data.linkedin}/>
          <Social label="Github" href={props.data.github}/>
        </p>
    </div>
  )
  }
//     <Col md="2" xs="6">
//     <div className="team-player">
//       <img
//         alt="..."
//         className="rounded-circle img-fluid img-raised"
//         src={props.data.image_url}
//       ></img>
//       <h4 className="title" style={{fontSize:"14px",marginTop:"0px",paddingTop:"20px",marginBottom:"10px"}}>{props.data.name}</h4>
//       <p className="category text-info" style={{fontSize:"14px",marginBottom:"0px"}}>{props.data.role}</p>
//       <ButtonSocial href={props.data.linkedin} icon="fab fa-linkedin"/>
//       <ButtonSocial href={props.data.twitter} icon="fab fa-twitter"/>
//       <ButtonSocial href={props.data.github} icon="fab fa-github"/>
//     </div>
//   </Col>
//   );
// }


function Team(props){
    return (
        <div className="img-team-container">
        
          {props.data.map(el => (
              <TeamProfile data={el}/>
          ))}
        </div>
    )
}

export default Team;
