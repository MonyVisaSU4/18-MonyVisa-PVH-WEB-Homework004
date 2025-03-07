import "./App.css";
import AssignmentsComponent from "./components/AssignmentsComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import { ProjectDataProvider } from "./context/ProjectDataContext";

function App() {
  return (
    <ProjectDataProvider>
      <div id="Container" className="grid grid-cols-12 min-h-screen bg-gray-100">
        <div id="LContain" className="col-span-3">
          <SidebarComponent/>
        </div>
        <div id="RContain" className="col-span-9">
          <div className="pt-[2%] pl-[3%]">
            <div id="U-RContain">
              <TopNavbarComponent/>
            </div>
            <div id="B-RContain" className="grid grid-cols-12 mt-8">
              <div id="L-B-RContain" className="col-span-10">
                <div className="pt-[2%] pr-[5%]">
                  <div id="U-L-B-RContain">
                    <DashboardComponent/>
                  </div>
                  <div id="B-L-B-RContain" className="flex justify-between pt-[5%]">
                    <div className="relative w-full">
                      <div className="flex justify-between items-center mb-5">
                        <div id="Assignment">
                          <AssignmentsComponent/>
                        </div>
                        <div id="AbsoluteItem">
                          <AddNewProjectComponent/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div id="R-B-RContain" className="pt-[20%]">
                  <LearningMaterialsComponent/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectDataProvider>
  );
}

export default App;