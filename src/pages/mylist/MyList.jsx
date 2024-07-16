import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Mydatatable from "../../components/mydatatable/MyDatatable";

const Mylist = ({columns}) => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="myListContainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
        </div> */}
        <Mydatatable columns={columns} />
      </div>
    </div>
  );
};

export default Mylist;