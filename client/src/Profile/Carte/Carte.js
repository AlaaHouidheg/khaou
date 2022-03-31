import React, { useEffect } from "react";
import "./Carte.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../../JS/Actions/User";
const isAuth = localStorage.getItem("token");

function Carte() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
  }, []);
  const users = useSelector((state) => state.userReducer.user);
  return (
    <div className="email-si">
      <div className="signature">
        <div className="image-email">
          <img src={users.photo} />
        </div>
        <div className="support">
          <h1 className="nameemeil">
            {users.name}
            <span>{users.lastname}</span>
          </h1>
          <h3 className="post">Web developer</h3>
          <ul className="info-email">
            <li>
              <ion-icon name="call-outline"></ion-icon>
              {users.phone}
            </li>
            <li>
              <ion-icon name="mail-outline"></ion-icon>
              {users.email}
            </li>
            <li>
              <ion-icon name="at-outline"></ion-icon>adresse
            </li>
          </ul>
          <div className="lienprofile">
            <Link to="/profile">Continuer</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carte;
