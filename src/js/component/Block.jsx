import React from "react";
import { Card } from "../component/Card.jsx";


export const Block =({title, data})=> {

return (  
<div className="container">
<h1>{title}</h1>
        <div className="row overflow-auto flex-nowrap"> 
          {data.map((card,index) => {
            return (
              <div className="col">
                <Card
                  title={card.title}
                  img={card.img}
                  gender={card.gender}
                  haircolor={card.haircolor}
                  eyecolor={card.eyecolor}
                  topic={title}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
}