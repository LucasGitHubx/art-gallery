import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import MainPage from "./pages/MainPage";
import AddPhotoPage from "./pages/AddPhotoPage";
import AboutPage from "./pages/AboutPage";
import FavouritePhotosPage from "./pages/FavouritePhotosPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />}></Route>
        <Route path="/add" element={<AddPhotoPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/favourites" element={<FavouritePhotosPage />}></Route>
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
