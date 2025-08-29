import Filter from "../components/Filter";
import Navbar2 from "../components/Navbar2";
import "../Styles/freelancerdashboard.css"; // new CSS file
import JobCardList from "../components/JobCards";
import SampleCard from "../components/SampleCard";

function Freelancerdashboard() {

  //const toggleFilter = () => setFilterOn((prev) => !prev);

  return (
    <div className="dashboard">
      {/* Navbar */}
      <Navbar2 />

      {/* Dashboard Header */}
     

      {/* Filter Sidebar */}
     
      {/* Main Content */}
     
        {/* Job listings or projects go here */}
       <div className="Greeting">
        <h1>Welcome back Mohan..🎉 </h1>
       </div>
      
        <div className="Jobs-for-u">
        <h1> Jobs</h1>
        <SampleCard/>
       
      </div>
     
    </div>
  );
}

export default Freelancerdashboard;
