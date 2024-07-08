import { useEffect, useState } from "react";
import { getFavourites } from "../firebase/firestore";
import FavouritePhoto from "../components/FavouritePhoto";

export default function FavouritePhotosPage() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    getFavourites(setData, setLoaded);
  }, []);

  return (
    <div className="favourite-page page">
      {!loaded ? (
        <h2>Loading...</h2>
      ) : data.length == 0 ? (
        <h2>There are no favourite photos for the moment...</h2>
      ) : (
        <div className="photos">
          {data.map((photo) => {
            return <FavouritePhoto photo={photo} key={photo.id} />;
          })}
        </div>
      )}
    </div>
  );
}
