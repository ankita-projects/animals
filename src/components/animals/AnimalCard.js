import React from "react";

const AnimalCard = ({ name, link, img, desc, aclass }) => {
  const truncate = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <em>{aclass}</em>
      <p>{truncate(desc, 30)} ...</p>
      <a href={link}>Read more</a>
    </div>
  );
};

export default AnimalCard;
