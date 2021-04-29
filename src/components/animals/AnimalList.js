import React, { useState, useEffect } from "react";
import AnimalCard from "../animals/AnimalCard";

const AnimalList = ({animals}) => {

  return (
    <div className="posts">
      {animals.map((a) => (
        <AnimalCard
          key={a.id}
          name={a.name}
          img={a.img}
          desc={a.desc}
          aclass={a.aclass}
          link={a.link}
        />
      ))}
    </div>
  );
};

export default AnimalList;
