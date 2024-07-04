import { app } from "./firebase";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

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
  });

  setData(photos);
  setLoaded(true);
}

export function deletePhoto(id, setData, setLoaded) {
  const docRef = doc(db, "photos", id);
  // await deleteDoc(docRef);
  // getAllPhotos(setData, setLoaded);

  onSnapshot(docRef, async (doc) => {
    await deleteDoc(docRef);
    getAllPhotos(setData, setLoaded);
  });
}
