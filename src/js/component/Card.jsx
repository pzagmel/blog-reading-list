import React from "react";
import { Link } from "react-router-dom";

export const Card = ({img, title, gender, haircolor, eyecolor,population, terrain}) => {

  return (  
    <div className="card ">
      <img src={img} className="card-img-top" style={{"width":"305px","height":"200px"}} />
      <div className="card-body" style={{"width":"305px", "height":"180px"}}>
        <h5 className="card-title">{title}</h5>
        
       <p className="card-text">Gender:{gender}</p>
        <p className="card-text">Hair Color:{haircolor}</p>
        <p className="card-text"> Eye Color:{eyecolor}</p>
       
       <p className="card-text"> population:{population}</p>
      <p className="card-text"> terrain:{terrain}</p>
      </div>
      <div className="card-footer">

        <a href="#" className="btn btn-primary">
          Find out more!
        </a>
      </div>
    </div>
    
  );
};
