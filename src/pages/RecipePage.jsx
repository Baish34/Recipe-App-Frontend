import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";

const RecipePage = () => {
  const { data: recipes, loading, error } = useFetch(
    "http://localhost:3000/dish",
    []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleDelete = async (dishId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/dish/${dishId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete recipe: ${errorText}`);
      }

      // Remove the deleted recipe from the UI
      setSuccessMessage("Recipe deleted successfully");
    } catch (error) {
      console.error("Error while deleting recipe:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <input
          type="text"
          placeholder="Search recipes..."
          className="form-control mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <h2 className="my-4">My Recipes:</h2>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <div className="row">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div className="col-md-3" key={recipe._id}>
                <div className="card mb-4">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{recipe.name}</h4>
                    <p className="card-text">
                      <strong>Cuisine Type: </strong>
                      {recipe.cuisineType}
                    </p>
                    <p>
                      <strong>Ingredients: </strong>
                      <Link to={`/dish/${recipe._id}`}>See Recipe</Link>
                    </p>
                    <p>
                      <strong>Instructions: </strong>
                      <Link to={`/dish/${recipe._id}`}>See Recipe</Link>
                    </p>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(recipe._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RecipePage;
