import React, { useEffect } from "react";
import Sidebar from "../../Fixedhash/Sidebar/Sidebar";
import Navig from "../../Fixedhash/Navigation/Navig";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../../JS/Actions/User";
const isAuth = localStorage.getItem("token");

function Acceuil() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navig />
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div> */}
        <div className="charts">
          {/* <FeaturedInfo />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        {/* <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table />
      </div> */}
      </div>
    </div>
  );
}

export default Acceuil;
