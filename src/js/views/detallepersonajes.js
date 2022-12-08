import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Context } from "../store/appContext";

export const Detailscharacters = () => {
  const { store, actions } = useContext(Context);
  console.log(window.location.pathname);
  const { pathname } = useLocation();
  const aux = pathname.split("/");
  console.log(aux);
  let id = aux[aux.length - 1];
  if (id === "") id = aux[aux.length - 2];
  console.log(id);
  const cargaInfo = async () => {
    fetch("https://www.swapi.tech/api/people/" + id)
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data);
      });
  };

  useEffect(() => {
    cargaInfo();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="http://cdn.shopify.com/s/files/1/0190/5436/2724/articles/star_wars_personajes_1024x1024.jpg?v=1616087475"
              width={600}
            />
          </div>
          <div className="col">
            <p> </p>
          </div>
        </div>
      </div>
      <table></table>
    </>
  );
};
