import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
