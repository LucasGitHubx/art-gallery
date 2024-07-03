import { app } from "./firebase";
import { getFirestore, query, getDocs, collection } from "firebase/firestore";

const db = getFirestore(app);
const photoRef = collection(db, "photos");

export async function getAllPhotos(setData, setLoaded) {
  const photos = [];
  const q = query(photoRef);
  const data = await getDocs(q);

  data.docs.forEach((doc) => {
    photos.push({
      id: doc.id,
      title: doc.data().title,
      author: doc.data().author,
      url: doc.data().url,
      tags: doc.data().tags,
    });
    setData(photos);
  });

  console.log(photos);
  setLoaded(true);
}
