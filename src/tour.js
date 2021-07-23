import React, { useState } from "react";
import {Link} from 'react-router-dom'

const Tour = ({ removeTour, id, name, info, image }) => {
  return (
    <article>
      <img src={image} alt="image" />
      <div className="info">
        <h1>{name}</h1>
        <p>{info.substring(0, 100)}</p>
        <button type="button" onClick={() => removeTour(id)}>
          Remove Item
        </button>
        <Link to={`/tours/${id}`}>View More</Link>
      </div>
    </article>
  );
};

export default Tour;
