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

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/art-gallery/" element={<MainLayout />}>
        <Route index element={<MainPage />}></Route>
        <Route path="art-gallery//add" element={<AddPhotoPage />}></Route>
        <Route path="art-gallery//about" element={<AboutPage />}></Route>
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
