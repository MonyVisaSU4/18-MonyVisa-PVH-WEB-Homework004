import React from "react";
import { useProjectData } from "../context/ProjectDataContext";
import CardComponent from "./CardComponent";

export default function AssignmentsComponent() {
  const { filteredProjects } = useProjectData();

  return (
    <div>
      <div className="flex justify-between mb-6">
        {/* assignments title */}
        <h2 className="text-xl font-semibold">Assignments</h2>
      </div>
      
      {/* Project cards */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="transform transition duration-200 hover:scale-105">
              <CardComponent project={project} />
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
          <p className="text-gray-500 mb-4">No projects found</p>
          <p className="text-sm text-gray-400">
            Click on "New Project" to create your first project
          </p>
        </div>
      )}
    </div>
  );
}
