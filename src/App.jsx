import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EnterNameAndSector from "./pages/EnterNameAndSector";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./pages/PageNotFound";
import EditNameAndSector from "./pages/EditNameAndSector";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create",
      element: <EnterNameAndSector />,
    },
    {
      path: `/selectedOptions/:id`,
      element: <EditNameAndSector />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </>
  );
}

export default App;
