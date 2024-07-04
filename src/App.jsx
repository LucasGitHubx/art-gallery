import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import MainPage from "./pages/MainPage";
import AddPhotoPage from "./pages/AddPhotoPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />}></Route>
        <Route path="/add" element={<AddPhotoPage />}></Route>
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
