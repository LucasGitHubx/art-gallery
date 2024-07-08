export default function FavouritePhoto({ photo }) {
  console.log(photo);

  return (
    <div className="favourite-photo">
      <img src={photo.url} alt={photo.title} />
      <div className="information">
        <div className="main-information">
          <h3 className="title">{photo.title}</h3>
          <p>
            by <i>{photo.author}</i>, <i>{photo.person}'s favourite</i>
          </p>
        </div>
      </div>
    </div>
  );
}
