import React, { createContext, useState, useContext, useEffect } from 'react';

const ProjectDataContext = createContext();

export const useProjectData = () => useContext(ProjectDataContext);

export const ProjectDataProvider = ({ children }) => {
  // Initialize state from localStorage if available
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : [];
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Save projects to localStorage when they change
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
    
    // Filter projects based on search term
    const filtered = projects.filter(project => 
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [projects, searchTerm]);

  // Add a new project
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setProjects([...projects, newProject]);
  };

  // Update search term
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <ProjectDataContext.Provider value={{ 
      projects, 
      filteredProjects, 
      addProject, 
      searchTerm, 
      handleSearch 
    }}>
      {children}
    </ProjectDataContext.Provider>
  );
};

export default ProjectDataContext;