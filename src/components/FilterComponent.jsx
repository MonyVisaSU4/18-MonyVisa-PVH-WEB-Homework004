import React, {useState} from "react";

export default function FilterComponent() {
  const [Option,setOption] = useState("A-Z")
  const handleChange = (e)=>{
    setOption(e.target.value);
  };
  // prevent the page from reload
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="mt-4 mx-4 flex justify-between" onSubmit={handleSubmit}>
      <div className="relative w-full ">
        <select
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          value={Option}
          onChange={handleChange}
          className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
        >
          <option hidden value="">
            Sort By
          </option>
          <optgroup label="Sort By">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}

