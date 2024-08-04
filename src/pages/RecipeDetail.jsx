import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";

const RecipeDetail = () => {
  const { id } = useParams();
  const {
    data: recipe,
    loading,
    error,
  } = useFetch(
    `https://c8e4eaa8-3e45-45e0-8524-3f4d73e6e408-00-35718akvqu32e.worf.replit.dev/dish/id/${id}`,
    null,
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!recipe) return <p>No recipe found.</p>;

  return (
    <>
      <Header />
      <div className="container my-4">
        <h2>{recipe.name}</h2>
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                className="img-fluid rounded-start"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-text mb-2">
                  Cuisine Type: {recipe.cuisineType}
                </h4>
                <h4 className="card-text mt-3">Ingredients:</h4>
                <p className="card-text">{recipe.ingredients.join(", ")}</p>
                <h4 className="card-text">Instructions:</h4>
                <ol>
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
