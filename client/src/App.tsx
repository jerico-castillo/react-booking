import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/rootLayout/RootLayout";
import "./index.css";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./hooks/hotelApis";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/hotels",
        element: <List />,
      },
      { path: "/hotels/:hotelId", element: <Hotel /> },
    ],
  },
]);

function App() {
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
