import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials as initialMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  // State to manage the learning materials
  const [materials, setMaterials] = useState(initialMaterials);

  // Function to handle star click
  const handleStarClick = (id) => {
    // Update the isFavorite property of the clicked material
    const updatedMaterials = materials.map((material) =>
      material.id === id ? { ...material, isFavorite: !material.isFavorite } : material
    );
    setMaterials(updatedMaterials);
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh] w-[21vw]">
      {/* Calling filter component */}
      <FilterComponent />

      {/* Title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* Materials list */}
      <div className="space-y-3">
        {materials.map((learn) => (
          <div
            key={learn.id}
            className="bg-light-gray px-4 py-2 flex gap-5 items-center"
          >
            <img
              src={learn.image}
              alt={learn.title}
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between relative">
                <p className="text-base font-medium">{learn.title}</p>
                {/* Star Icon with onClick Handler */}
                <Star
                  size={20}
                  fill={learn.isFavorite ? "#ebd513" : "none"} // Conditional fill
                  stroke={learn.isFavorite ? "black" : "currentColor"} // Conditional stroke
                  onClick={() => handleStarClick(learn.id)} // Handle click
                  style={{ cursor: "pointer" }} // Make it clickable
                />
              </div>
              <p className="text-gray-400 text-sm">Posted at: {learn.postedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}