import axios from "axios";
import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  ADD_USER,
  DELETE_USER,
} from "../Constantes/listuser";
export const getuser = () => async (dispatch) => {
  dispatch({ type: GET_USER });
  try {
    let result = await axios.get("/user/all");
    console.log(result.data.result);
    dispatch({ type: GET_USER_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error.data });
    console.log(error);
  }
};
