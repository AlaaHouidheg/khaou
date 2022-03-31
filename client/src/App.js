import "./App.css";
import Signup from "./Components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord";
import Navbar from "./Components/CompStatic/Navbar/Navbar";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "./JS/Actions/User";
import Home from "./Components/CompStatic/HomePage/Home";
import Aboutus from "./Components/CompStatic/Aboutpage/Aboutus";
import Footer from "./Components/CompStatic/Footer/Footer";
import Courses from "./Components/CompStatic/Courses/Courses";
import Sign from "./Components/CompStatic/Login/Sign";
import Add from "./Components/AddCours/Add";
import Acceuil from "./Pages/Home/Acceuil";
import Liste from "./Pages/Liste/Liste";
import Coursl from "./Pages/Courslist/Coursl";
import NewC from "./Pages/New/NewC";
import Descripcours from "./Components/CompStatic/Descreption/Descripcours";
import Profile from "./Profile/ProfileUsers/Profile";
import Carte from "./Profile/Carte/Carte";
import AdminRoute from "./Components/Routes/AdminRoute";
import Contact from "./Components/CompStatic/Contact/Contact";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/sign" element={<Sign />} />

        <Route path="/cours" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<Add />} />

        <Route path="/users" element={<Liste />} />
        <Route path="/courses" element={<Coursl />} />
        <Route path="/courses/new" element={<NewC />} />
        <Route path="/cours/:id" element={<Descripcours />} />
        <Route path="/profile" element={<Profile />} />

        <Route element={<PrivateRoute />}>
          <Route path="/carteprofile" element={<Carte />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<Acceuil />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
