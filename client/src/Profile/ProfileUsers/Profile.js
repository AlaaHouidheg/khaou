import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../../JS/Actions/User";
import "./Profile.css";
const isAuth = localStorage.getItem("token");

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  return (
    <div className="continue">
      <div className="bloclong">
        <div className="leftbloc">
          <div class="photo-left">
            <img src={users.photo} className="imageprofile" />
          </div>
          <h4 class="name"> {users.name}</h4>
          <p class="info">{users.email}</p>
          <button class="btn btn-primary" type="button">
            Upload new image
          </button>
        </div>
        <div className="rightbloc">
          <div className="navprofile">
            <ul>
              <li>About me</li>
              <li>Courses</li>
              <li>Edit Profil</li>
            </ul>
          </div>
          <div className="blocinfo">
            <ul>
              <li>About me</li>
              <li>Courses</li>
              <li>Edit Profil</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
