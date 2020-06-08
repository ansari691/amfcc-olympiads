import {
    POST_EXAM_SUCCESS,
    POST_EXAM_ERROR

    // POST_AD_ERROR,
    // GET_AD,
    // GET_AD_FAILED,
    // GET_AD_BY_ID,
    // GET_AD_BY_ID_FAILED,
    // CLEAR_AD,
    // DELETE_AD
  } from "./types";
  import axios from "axios";
  import { setAlert } from "../actions/alert";
  
  //adding an exam
  export const addExam = addExamFormData => async dispatch => {
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(addExamFormData);
    try {
      const res = await axios.post(process.env.REACT_APP_API_BASE_URL + "exams",  body ,config);
  
      dispatch({
        type: POST_EXAM_SUCCESS,
        payload: res.data
      });

      dispatch(setAlert("Exam added successfully", "success"));
      //setTimeout("location.reload(true);", 1000)
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(err);
  
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: POST_EXAM_ERROR
      });
    }
  };
  
//   //getting all ads
//   export const getAllAds = (perPage, pageNumber) => async dispatch => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/postAd?pagination=${perPage}&page=${pageNumber}`);
//       console.log(res.data);
//       dispatch({
//         type: GET_AD,
//         payload: res.data
//       });
//     } catch (err) {
//       console.log("get ad failed");
//       // const errors = err.data.response.errors;
  
//       // if(errors){
//       //     errors.forEach(error => {
//       //         setAlert(error.msg, 'danger');
//       //     })
//       // }
  
//       dispatch({
//         type: GET_AD_FAILED
//       });
//     }
//   };
  
//   //getting ad by id
//   export const getAdById = id => async dispatch => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/postAd/${id}`);
  
//       dispatch({
//         type: GET_AD_BY_ID,
//         payload: res.data
//       });
  
//       console.log(res.data);
//     } catch (err) {
//       dispatch({
//         type: GET_AD_BY_ID_FAILED
//       });
//       console.log("get ad by id failed");
//     }
//   };
  
//   export const clearAd = () => dispatch => {
//     dispatch({
//       type: CLEAR_AD
//     });
//   };
  
//   export const deleteAd = id => async dispatch => {
  
//     await axios.delete(`http://localhost:5000/api/postAd/${id}`);
  
//     dispatch({
//       type: DELETE_AD
//     });
//     dispatch(setAlert('Ad deleted successfully', 'success'));
//     //return <Redirect to="/postList" />
//   };
  