import React, { useState } from "react";
import Header from "../components/Header";

const AddRecipes = () => {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    imageUrl: "",
    cuisineType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form with data:", formData); 
    try {
      const response = await fetch(
        "https://c8e4eaa8-3e45-45e0-8524-3f4d73e6e408-00-35718akvqu32e.worf.replit.dev/dish",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to add recipe.");
      }

      const data = await response.json();
      console.log("Added Recipe", data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="my-4">Add Recipe</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Cuisine Type:</label>
          <br />
          <input
            type="text"
            name="cuisineType"
            value={formData.cuisineType}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Image Link:</label>
          <br />
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Ingredients:</label>
          <br />
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows={2}
            cols={23}
          ></textarea>
          <br />
          <br />
          <label>Instructions:</label>
          <br />
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows={2}
            cols={23}
          ></textarea>
          <br />
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    </>
  );
};

export default AddRecipes;
