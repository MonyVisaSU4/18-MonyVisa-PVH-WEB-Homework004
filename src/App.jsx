import "./App.css";
import AssignmentsComponent from "./components/AssignmentsComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import FilterComponent from "./components/FilterComponent";
import CardCompo from "./components/CardComponent";

function App() {
  return (
    <>
      <div id="Container" className="grid grid-cols-12">
          <div id="LContain" className="col-span-3"><SidebarComponent/></div>
          <div id="RContain" className="col-span-9">
            <div className="pt-[2%] pl-[3%]">
              <div id="U-RContain"><TopNavbarComponent/></div>
              <div id="B-RContain" className="grid grid-cols-12">
                <div id="L-B-RContain" className="col-span-10">
                  <div className="pt-[2%] pr-[5%]">
                    <div id="U-L-B-RContain"><DashboardComponent/></div>
                    <div id="B-L-B-RContain" className="flex justify-between pt-[5%]">
                      <div className="relative">
                        <div id="Assignment"><AssignmentsComponent/></div>
                        <div>
                          <div id="card" className="scale-[0.7] w-full"><CardCompo/></div>
                        </div>
                      </div>
                      <div id="AbsoluteItem"><AddNewProjectComponent/></div>
                    </div>
                  </div>
                </div>
                <div className="pt-[20%]">
                  <div id="R-B-RContain" className="col-span-2"><LearningMaterialsComponent/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
