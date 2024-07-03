import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<MainLayout />}></Route>)
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
