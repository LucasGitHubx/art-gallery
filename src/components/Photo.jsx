import { deletePhoto, addFavourite } from "../firebase/firestore";
import { useState, useEffect } from "react";

export default function Photo({ photo, setData, tag }) {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");

  function handleMouseEnter(e) {
    setVisible(true);
  }

  function handleMouseLeave(e) {
    setVisible(false);
  }

  function handleDelete(e) {
    deletePhoto(photo.id, setData, tag);
  }

  function handleSubmitFavourite(e) {
    e.preventDefault();

    if (name.length > 3) {
      addFavourite(photo, name);
      setVisible(false);
      setName("");
    } else {
      alert("Name must be at least 3 characters long");
    }
  }

  return (
    <div
      className="photo"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={photo.url} alt={photo.title} />
      <div className="information">
        <div className="main-information">
          <h3 className="title">{photo.title}</h3>
          <p>
            by <i>{photo.author}</i>
          </p>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>

      <div className={visible ? "add-favourite visible" : "add-favourite"}>
        <h3>Would you like to add it to favourites?</h3>
        <div>
          <input
            type="text"
            placeholder="Enter your name please"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button onClick={handleSubmitFavourite}>submit</button>
        </div>
      </div>
    </div>
  );
}

/* 
NEXT THINGS TO GET DONE:

1) Add functionality to the delete button.
2) Develop the other pages (About us, add a photo and my favourites.)
3) Make the tag searcher work.
*/
