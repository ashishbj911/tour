import React from "react";

const Tour = ({ removeTour, id, name, info, image }) => {
  return (
    <article>
      <img src={image} alt="tour" />
      <div className="info">
        <h1>{name}</h1>
        <p>{info.substring(0, 100)}</p>
        <button type="button" onClick={() => removeTour(id)}>
          Remove Item
        </button>
      </div>
    </article>
  );
};

export default Tour;
