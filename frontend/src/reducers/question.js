import {
    POST_QUESTION_SUCCESS,
    POST_QUESTION_ERROR,
  } from "../actions/types";
  
  const initialState = {
    questions: [],
    loading: true,
    deleted : false
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case POST_EXAM_SUCCESS:
      case GET_AD:
        return {
          ...state,
          questions: payload,
          loading: false
        };
  
      case POST_EXAM_ERROR:
      //case GET_AD_FAILED:
      //case LOGOUT:
        return {
          ...state,
          loading: false
        };
  
    //     case DELETE_AD:
    //       return {
    //         ...state,
    //         loading: false,
    //         deleted : true
    //       };
  
    //   case CLEAR_AD:
    //     return {
    //       ...state,
    //       loading: false,
    //       posts: [],
    //       post: []
    //     };
  
    //   case GET_AD_BY_ID:
    //     return {
    //       ...state,
    //       post: payload,
    //       loading: false
    //     };
  
    //   case GET_AD_BY_ID_FAILED:
    //     return {
    //       ...state,
    //       loading: false
    //     };
  
      default:
        return state;
    }
  }
  