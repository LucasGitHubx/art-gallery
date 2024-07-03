export default function Photo({ photo }) {
  return (
    <div className="photo">
      <img src={photo.url} alt={photo.title} />
      <div className="information">
        <div className="main-information">
          <h3 className="title">{photo.title}</h3>
          <p>
            by <i>{photo.author}</i>
          </p>
        </div>
        <button>Delete</button>
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
