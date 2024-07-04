import { useState, useEffect } from "react";
import { addPhoto } from "../firebase/firestore";

export default function AddPhotoPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [url, setUrl] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [authorError, setAuthorError] = useState(false);
  const [tagsError, setTagsError] = useState(false);
  const [urlError, setUrlError] = useState(false);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(loaded);
  }, [loaded]);

  function handleSubmit(e) {
    e.preventDefault();

    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    let tagsValidation = true;
    let titleValidation = true;
    let authorValidation = true;
    let urlValidation = true;

    if (tags.length == 0) {
      setTagsError(true);
      tagsValidation = false;
    } else {
      const tagsArray = tags.split(",").map((element) => element.trim());
      const newTagsArray = tagsArray.filter((element) => element != "");

      tagsValidation = true;
      setTags(newTagsArray);
      setTagsError(false);
    }

    if (title.length < 5) {
      titleValidation = false;
      setTitleError(true);
    } else {
      titleValidation = true;
      setTitleError(false);
    }

    if (author.length < 5) {
      authorValidation = false;
      setAuthorError(true);
    } else {
      authorValidation = true;
      setAuthorError(false);
    }

    if (urlRegex.test(url)) {
      urlValidation = true;
      setUrlError(false);
    } else {
      urlValidation = false;
      setUrlError(true);
    }

    if (
      titleValidation &&
      authorValidation &&
      tagsValidation &&
      urlValidation
    ) {
      setTitle("");
      setAuthor("");
      setTags("");
      setUrl("");

      addPhoto(
        {
          title,
          author,
          tags,
          url,
        },
        setLoaded
      );
    }
  }

  return (
    <div className="add-photo page">
      <form onSubmit={handleSubmit}>
        <label className={titleError && "label-error"}>
          {!titleError ? "Enter a title" : "Incorrect title"}
        </label>
        <input
          type="text"
          placeholder="Eiffel Tower"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={titleError && "error-input"}
        />

        <label className={authorError && "label-error"}>
          {!authorError ? "Enter an author" : "Incorrect author"}
        </label>
        <input
          type="text"
          placeholder="Wesley Hughes"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={authorError && "error-input"}
        />

        <label className={tagsError && "label-error"}>
          {!tagsError ? "Enter tags separated by commas" : "Incorrect tags"}
        </label>
        <input
          type="text"
          placeholder="France, Paris, Trip..."
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className={tagsError && "error-input"}
        />

        <label className={urlError && "label-error"}>
          {!urlError ? "Photo's url" : "Incorrect url"}
        </label>
        <input
          type="text"
          placeholder="https://eiffel-tower.jpg"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={urlError && "error-input"}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
