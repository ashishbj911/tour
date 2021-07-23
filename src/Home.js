import React from 'react'
import { useEffect, useState } from "react";
import Tour from "./tour";
import loader from './loader.gif'

const url = 'https://course-api.com/react-tours-project'

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours)
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchTours(url);
  }, []);

  const removeTour = (id) => {
    const newTour = tours.filter((item) => item.id !== id)
    setTours(newTour)
 }
  if (loading) {
    return <img src={loader} className="load-img"/>;
  }
  if (error) {
    return <h1 className="text-center">There is some Error</h1>;
  }
  if(tours.length < 1){
    return <h1 className="text-center">No Tours Found</h1>;
  }
  return (
    <div className="tours-list">
     <div> <h1 className="text-center">Tours List</h1></div> 
    <div className="tours-main">
      {tours.map((item) => {
        return <Tour key={item.id} {...item} removeTour={removeTour}></Tour>;
      })}
    </div>
    </div>
  );
}
