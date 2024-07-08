import { app } from "./firebase";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  addDoc,
  where,
} from "firebase/firestore";

import Toastify from "toastify-js";

const db = getFirestore(app);
const photoRef = collection(db, "photos");
const favouritePhotosRef = collection(db, "favourite-photos");

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
      tags: Array(doc.data().tags),
    });
  });

  setData(photos);
  setLoaded(true);
}

export function deletePhoto(id, setData, tag) {
  const docRef = doc(db, "photos", id);
  // await deleteDoc(docRef);
  // getAllPhotos(setData, setLoaded);

  onSnapshot(docRef, async (doc) => {
    await deleteDoc(docRef);
    searchByTag(setData, tag);
  });
}

export async function addPhoto({ title, author, url, tags }) {
  try {
    await addDoc(photoRef, {
      title,
      author,
      tags,
      url,
    });

    Toastify({
      text: "Photo added correctly",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #3dc954)",
      },
    }).showToast();
  } catch (error) {
    Toastify({
      text: error.message,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, red, salmon, tomato)",
      },
    }).showToast();
  }
}

export async function searchByTag(setData, tag) {
  let photos = [];
  const q = query(photoRef, where("tags", "array-contains", tag));
  const data = await getDocs(q);

  data.docs.forEach((doc) => {
    photos.push({
      id: doc.id,
      title: doc.data().title,
      author: doc.data().author,
      url: doc.data().url,
      tags: Array(doc.data().tags),
    });
  });

  setData(photos);
}

export async function addFavourite({ author, title, url, tags }, person) {
  await addDoc(favouritePhotosRef, {
    author,
    title,
    url,
    tags: tags[0],
    person,
  });

  Toastify({
    text: "Photo added as favourite!",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #3dc954)",
    },
  }).showToast();
}

export async function getFavourites(setData, setLoaded) {
  const favouritePhotos = [];
  const q = query(favouritePhotosRef);
  const data = await getDocs(q);

  data.docs.forEach((doc) => {
    favouritePhotos.push({
      id: doc.id,
      title: doc.data().title,
      author: doc.data().author,
      url: doc.data().url,
      tags: Array(doc.data().tags),
      person: doc.data().person,
    });
  });

  setData(favouritePhotos);
  setLoaded(true);
}
