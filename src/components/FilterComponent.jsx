import React from "react";

// This component was completely incorrect - it was a duplicate of App.jsx
// Here's a proper implementation for a filter component
export default function FilterComponent({ onSortChange, currentSortOption }) {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Sort by:</h3>
        <select
          value={currentSortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="border border-gray-300 rounded-lg px-2 py-1 text-sm"
        >
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
    </div>
  );
}