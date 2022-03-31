import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { current, logout } from "../../JS/Actions/User";
import "./Navig.css";
const isAuth = localStorage.getItem("token");

function Navig() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  return (
    <div class="home">
      <div className="nav">
        <div class="sidebar-button">
          <span class="dashboard">Dashboard</span>
        </div>
        <div class="search-box">
          <input type="text" placeholder="Search..." />
          <ion-icon name="search-outline" class="bx bx-search"></ion-icon>
        </div>
        <div class="profile-details dropdown">
          <img src={users.photo} />
          <span class="admin_name dropbtn">{users.name}</span>
          <ion-icon
            name="chevron-down-outline"
            class="bx bx-chevron-down"
          ></ion-icon>
          <div class="dropdown-content">
            <a href="#">
              <ion-icon name="home-outline"></ion-icon>Home
            </a>
            <a href="#">
              <ion-icon name="create-outline"></ion-icon>Edit Profil
            </a>
            <a
              href="#"
              onClick={() => {
                dispatch(logout);
                navigate("/");
              }}
            >
              <ion-icon name="log-out-outline"></ion-icon>Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navig;
