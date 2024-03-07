import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/rootLayout/RootLayout";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
