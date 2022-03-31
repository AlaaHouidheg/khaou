import * as React from "react";
import "./DatatableCours.css";
import { Link } from "react-router-dom";
import { getcours } from "../../JS/Actions/Cours";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function DatatableCours() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcours());
  }, []);
  const cours = useSelector((state) => state.coursReducer.coursList);
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Cours
        <Link to="/courses/new" className="link">
          Add New
        </Link>
      </div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Name of Cours</TableCell>
              <TableCell className="tableCell">Domaine</TableCell>
              <TableCell className="tableCell">Cycle</TableCell>
              <TableCell className="tableCell">isFree</TableCell>
              <TableCell className="tableCell">Price</TableCell>
              <TableCell className="tableCell">Certifier</TableCell>
              <TableCell className="tableCell">description</TableCell>
              <TableCell className="tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cours
              ? cours.map((el) => (
                  <TableRow key={el.nameCours}>
                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        <img src={el.photo} alt="" className="image" />
                        {el.nameCours}
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">{el.domaine}</TableCell>
                    <TableCell className="tableCell">
                      {el.cycle}
                      <span>Mois</span>
                    </TableCell>
                    <TableCell className="tableCell">{el.isFree}</TableCell>
                    <TableCell className="tableCell">{el.price}</TableCell>
                    <TableCell className="tableCell">{el.certifier}</TableCell>
                    <TableCell className="tableCell">
                      {el.description}
                    </TableCell>
                    <TableCell className="tableCell">
                      <div className="buttonaction">
                    <button className="btnact danger"><ion-icon name="trash-outline"></ion-icon> Delete</button>
                    <button className="btnact success"> <ion-icon name="create-outline"></ion-icon>Edit</button>
                    </div>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default DatatableCours;
