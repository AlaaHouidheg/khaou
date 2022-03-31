import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./Descripcours.css";
import { editcours, getcours } from "../../../JS/Actions/Cours";
import { current } from "../../../JS/Actions/User";
import axios from "axios";

function Descripcours() {
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [participant, setparticipant] = useState();
  const [tab, settab] = useState(0);
  const users = useSelector((state) => state.userReducer.user);
  const isAuth = localStorage.getItem("token");
  const [cour, setcour] = useState({});
  const [part, setpart] = useState([]);
  useEffect(async () => {
    let result = await axios
      .get(`/cours/${params.id}`)
      .then((res) => setcour(res.data.result));
  }, []);

  const handleParticipate = () => {
    if (!isAuth) {
      navigate("/sign");
    }
    if (cour.participants?.length < cour?.nbrPartic) {
      //dispatch participate
      dispatch(
        editcours({
          id: cour._id,
          participant: { name: users.name, _id: users._id },
        })
      );
      window.location.reload();
    } else {
      //navigate to sign in
      <h1> n'ya plus du place</h1>;
    }
  };
  return (
    <div>
      <Navbar />
      <div class="containercours">
        <section class="cards1">
          <article class="cardcours card-1">
            <div class="cards">
              <div class="photo">
                <img src={cour.photo} />
              </div>
              <div class="description">
                <h2>{cour.nameCours}</h2>
                <h2>{cour.participants?.length}</h2>

                {cour.isFree == "free" ? (
                  <h1 class="pricecoursfree">{cour.isFree}</h1>
                ) : (
                  <h1 class="pricecoursprice">{cour.price}DT</h1>
                )}
                <h4>{cour.nbrPartic} participants</h4>
                <p>{cour.description}</p>
                <button onClick={handleParticipate}>Participer</button>
              </div>
            </div>
          </article>
          <article class="cardcours card-2">
            <div className="hautbutn">
              <button onClick={() => settab(1)}>Chapters</button>
              <button onClick={() => settab(2)}>Overview</button>
            </div>
            {tab == 1 ? (
              <div>
                <div class="prize">
                  <h3>
                    <strong>Chapters</strong>
                  </h3>
                </div>
                <div className="listchapter">
                  {cour.modules.map((el) => (
                    <div>
                      <h4>
                        chapter : <span>{el.name}</span>
                      </h4>
                      <embed
                        src={el.file}
                        type="application/pdf"
                        width="600px"
                        height="500px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {tab == 2 ? (
              <div>
                <div className="listchapter">
                  <h4>
                    Certifier : <span>{cour.certifier}</span>
                  </h4>
                  <h4>
                    Instrocteur : <span>{cour.enseignant}</span>
                  </h4>
                  <h4>
                    durées : <span>{cour.cycle}</span>
                  </h4>
                </div>
              </div>
            ) : null}
          </article>
          {/* <article class="cardcours card-3">
            <h2>
              {" "}
              <small></small>{" "}
            </h2>
          </article> */}
        </section>
      </div>
    </div>
  );
}

export default Descripcours;
