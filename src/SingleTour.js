import React from "react";
import { useParams } from "react-router-dom";
const url = `https://course-api.com/react-tours-project?id=${id}`;

export const SingleTour = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  
  return (
    <div>
      <h1>Tour</h1>
    </div>
  );
};
