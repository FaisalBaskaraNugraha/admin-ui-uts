import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";

const Dashboard = () => {
    return (
        <div className="list">
          <Sidebar />
          <div className="listContainer">
            <Navbar />
            <div className="widgets">
              <Widget type="user"/>
              <Widget type="order"/>
            </div>
            <Datatable columns={columns} />
          </div>
        </div>
      );
    
}

export default Dashboard;