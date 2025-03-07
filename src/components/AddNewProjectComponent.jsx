import { Plus } from "lucide-react";
import React, { useState, useEffect } from "react"; // Added useEffect import
import { useProjectData } from "../context/ProjectDataContext"; // Missing import was added

export default function AddNewProjectComponent() {
  const { addProject } = useProjectData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    dueDate: "",
    progress: "",
    description: "",
  });
  
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessage("");
  };

  const validateForm = () => {
    if (!formData.projectName.trim() || !formData.dueDate || !formData.progress) {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const updatedFormData = {
        ...formData,
        description: formData.description.trim()
          ? formData.description
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque nisi nec lorem tincidunt, vel aliquam justo cursus.",
      };
       
      // Add the project using context
      addProject(updatedFormData);
      
      // Close modal and reset form
      setIsModalOpen(false);
      setFormData({
        projectName: "",
        dueDate: "",
        progress: "",
        description: "",
      });
      setErrorMessage("");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  // Add event listeners for clicking outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.getElementById("crud-modal-content");
      if (isModalOpen && modal && !modal.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);
  
  return (
    <div>
      <button
        onClick={openModal}
        className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500 flex items-center gap-2"
        type="button"
      >
        <Plus size={22} /> <span className="text-base">New Project</span>
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-transparent drop-shadow-2xl z-50 flex justify-center items-center"
        >
          <div className="relative p-4 w-full max-w-md">
            <div id="crud-modal-content" className="relative bg-white rounded-2xl shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Project
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-4 md:p-5">
                {/* Display error message */}
                {errorMessage && (
                  <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
                )}

                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="projectName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Project Name
                    </label>
                    <input
                      type="text"
                      name="projectName"
                      id="projectName"
                      value={formData.projectName}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Project Name"
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="dueDate"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Due Date
                    </label>
                    <input
                      type="date"
                      name="dueDate"
                      id="dueDate"
                      value={formData.dueDate}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="progress"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Progress
                    </label>
                    <select
                      id="progress"
                      name="progress"
                      value={formData.progress}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value="">Select Progress</option>
                      <option value="100">100</option>
                      <option value="75">75</option>
                      <option value="50">50</option>
                      <option value="25">25</option>
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows="4"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write product description here"
                    ></textarea>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    disabled={
                      !formData.projectName ||
                      !formData.dueDate ||
                      !formData.progress
                    }
                    className="text-white inline-flex items-center bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-4 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500 cursor-pointer active:border-sky-500 active:border-1"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}