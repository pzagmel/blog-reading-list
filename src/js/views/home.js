import React from "react";
import "../../styles/home.css";
import { Block } from "../component/Block.jsx";

export const Home = () => {
  const characters = [
    {
      img: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/02/12/16131067902692.jpg",
      title: "Luke Skywalker",
      gender: "male",
      haircolor: "",
      eyecolor: "",
      textbutton: "Find Out More!",
    },
    {
      img: "https://assets.adnradio.cl/2022/08/Clipboard-2-925x470.jpg",
      title: "C-3PO",
      gender: "",
      haircolor: "",
      eyecolor: "",
      textbutton: "Find Out More!",
    },
    {
      img: "https://content.rolex.com/dam/world-of-rolex/tennis/wimbledon/2022/share-search/rolex-and-tennis-wimbledon-2022-share_wim21jb_01153_r.jpg",
      title: "R2-D2",
      gender: "",
      haircolor: "",
      eyecolor: "",
      textbutton: "Find Out More!",
    },
    {
      img: "https://www.record.com.mx/sites/default/files/styles/amp-discovery-1200x/public/articulos/2021/08/30/us_open_2.jpg?itok=tkyx2yBW",
      title: "Darth Vader",
      gender: "",
      haircolor: "",
      eyecolor: "",
      textbutton: "Find Out More!",
    },
    {
      img: "https://www.record.com.mx/sites/default/files/styles/amp-discovery-1200x/public/articulos/2021/08/30/us_open_2.jpg?itok=tkyx2yBW",
      title: "Leia Organa",
      gender: "",
      haircolor: "",
      eyecolor: "",
  
    },
  ];
  const planets = [
    {
      img: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/02/12/16131067902692.jpg",
      title: "Luke Skywalker",
      population:"40000",
	  terrain:"seco"
	  
    },
    {
      img: "https://assets.adnradio.cl/2022/08/Clipboard-2-925x470.jpg",
      title: "C-3PO",
      population:"40000",
	  terrain:"seco"
    },
    {
      img: "https://content.rolex.com/dam/world-of-rolex/tennis/wimbledon/2022/share-search/rolex-and-tennis-wimbledon-2022-share_wim21jb_01153_r.jpg",
      title: "R2-D2",
      population:"40000",
	  terrain:"seco"
    },
    {
      img: "https://www.record.com.mx/sites/default/files/styles/amp-discovery-1200x/public/articulos/2021/08/30/us_open_2.jpg?itok=tkyx2yBW",
      title: "Darth Vader",
      population:"40000",
	  terrain:"seco"
    },
    {
      img: "https://www.record.com.mx/sites/default/files/styles/amp-discovery-1200x/public/articulos/2021/08/30/us_open_2.jpg?itok=tkyx2yBW",
      title: "Leia Organa",
      population:"40000",
	  terrain:"seco"
    },
  ];
  return (
    <>
	<Block title="Characters" data={characters}></Block>
	<Block title="Planets" data={planets}></Block>
      
    </>
  );
};
