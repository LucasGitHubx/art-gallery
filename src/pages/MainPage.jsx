import { useState, useEffect } from "react";
import { getAllPhotos } from "../firebase/firestore";
import { searchByTag } from "../firebase/firestore";
import Photo from "../components/Photo";

export default function MainPage() {
  const [data, setData] = useState([]);

  const [tag, setTag] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [label, setLabel] = useState("Search by tag");

  useEffect(() => {
    if (tag == "") {
      getAllPhotos(setData, setLoaded);
    } else {
      searchByTag(setData, tag);
    }
  }, [tag]);

  function handleSubmit(e) {
    e.preventDefault();

    searchByTag(tag);
  }

  return (
    <div className="main-page page">
      <form onSubmit={handleSubmit}>
        <label>{label}</label>
        <div>
          <input
            type="text"
            placeholder="Football..."
            onChange={(e) => setTag(e.target.value)}
            value={tag}
          />
          <button>Submit</button>
        </div>
      </form>

      {!loaded ? (
        <h2>Loading...</h2>
      ) : data.length == 0 ? (
        <h2>There are no photos for the moment...</h2>
      ) : (
        <div className="photos">
          {data.map((photo) => {
            return <Photo photo={photo} setData={setData} key={photo.id} />;
          })}
        </div>
      )}
    </div>
  );
}
