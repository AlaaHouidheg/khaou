import {
  GET_COURS_SUCCESS,
  GET_COURS,
  GET_COURS_FAIL,
  ADD_COURS,
  DELETE_COURS,
  EDIT_COURS,
  EDIT_COURS_FAIL,
} from "../Constantes/Cours";
import axios from "axios";

export const getcours = () => async (dispatch) => {
  dispatch({ type: GET_COURS });
  try {
    let result = await axios.get("/cours/all");
    console.log(result.data.result);
    dispatch({ type: GET_COURS_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_COURS_FAIL, payload: error.data });
    console.log(error);
  }
};
export const addcours = (newcours) => async (dispatch) => {
  try {
    let result = axios.post("/cours/add", newcours);
    dispatch({ type: ADD_COURS, payload: "cours added" });
    dispatch(getcours());
  } catch (error) {
    dispatch({ type: GET_COURS_FAIL, payload: error.data });
    console.log(error);
  }
};

export const editcours =
  ({ id, participant }) =>
  async (dispatch) => {
    try {
      let result = axios.put(`/cours/nbr/${id}`, participant);
      console.log(id);
      dispatch({ type: EDIT_COURS, payload: "cours update" });
      dispatch(getcours());
    } catch (error) {
      dispatch({ type: EDIT_COURS_FAIL, payload: error.data });
      console.log(error);
    }
  };
