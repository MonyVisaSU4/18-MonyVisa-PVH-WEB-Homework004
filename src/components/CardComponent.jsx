import { EllipsisVertical } from "lucide-react"; // Missing import

export default function CardComponent({ project }) {
  // If no project is provided, return null
  if (!project) return null;

  // Format date to calculate days left
  const calculateDaysLeft = () => {
    const today = new Date();
    const dueDate = new Date(project.dueDate);
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "Overdue";
    if (diffDays === 0) return "Due today";
    if (diffDays === 1) return "1 day left";
    return `${diffDays} days left`;
  };

  // Determine progress bar color based on progress
  const getProgressColor = () => {
    const progress = parseInt(project.progress);
    if (progress <= 25) return "bg-custom-sky-blue";
    if (progress <= 50) return "bg-custom-yellow-500";
    if (progress <= 75) return "bg-custom-carrot";
    return "bg-custom-pink";
  };

  // Format date for display
  const formatDate = () => {
    const date = new Date(project.createdAt);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div>
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-5">
          {/* date */}
          <p className={`text-custom-sky-blue font-medium`}>{formatDate()}</p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {project.projectName}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          {project.description}
        </p>

        {/* progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{project.progress}%</p>
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div 
            className={`${getProgressColor()} h-2.5 rounded-full`}
            style={{ width: `${project.progress}%` }}
          ></div>

          <div
            className="border-l-4 rounded-full border-l-custom-pink h-5 absolute -top-1 left-1/4"
            title="25%"
          ></div>

          <div
            className="border-l-4 rounded-full border-l-custom-yellow-500 h-5 absolute -top-1 left-2/4"
            title="50%"
          ></div>

          <div
            className="border-l-4 rounded-full border-l-custom-carrot h-5 absolute -top-1 left-3/4"
            title="75%"
          ></div>
        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
            {calculateDaysLeft()}
          </p>
        </div>
      </div>
    </div>
  );
}