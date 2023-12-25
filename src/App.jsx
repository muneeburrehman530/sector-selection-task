import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EnterNameAndSector from "./pages/EnterNameAndSector";

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
  ]);
  return (
    <>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
      <h1 className="text-success">Hello chris</h1>
    </>
  );
}

export default App;
