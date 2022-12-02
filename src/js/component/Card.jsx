import React from "react";

export const Card = ({img, title, gender, haircolor, eyecolor,population, terrain,topic}) => {

  return (  
    <div className="card ">
      <img src={img} className="card-img-top" style={{"width":"305px","height":"200px"}} />
      <div className="card-body" style={{"width":"305px", "height":"180px"}}>
        <h5 className="card-title">{title}</h5>
        
       { (gender|| topic==="Characters")&&<p className="card-text">Gender:{gender}</p>}
        {haircolor&&<p className="card-text">Hair Color:{haircolor}</p>}
        {eyecolor&&<p className="card-text"> Eye Color:{eyecolor}</p>}
        {population&&<p className="card-text"> population:{population}</p>}
        {terrain&&<p className="card-text"> terrain:{terrain}</p>}
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">
          Find out more!
        </a>
      </div>
    </div>
    
  );
};
