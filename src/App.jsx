import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddRecipes from "./pages/AddRecipes";
import RecipePage from "./pages/RecipePage";
import RecipeDetail from "./pages/RecipeDetail";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipePage />,
  },
  {
    path: "/addRecipes",
    element: <AddRecipes />,
  },
  {
    path: "/recipePage",
    element: <RecipePage />,
  },
  {
    path: "/dish/:id",
    element: <RecipeDetail />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
