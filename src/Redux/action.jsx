import axios from "axios";
import * as types from "./actionTypes";

const fetchdatafailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload,
  };
};
const savedata=(payload)=>{
  let obj={};
  
  payload.map((e)=>(
    
    e.preview_photos.map((k) => (
      
      obj[`a${k.id}`]=false
     
    ))
   
  ))
  
  localStorage.setItem("btn",JSON.stringify(obj))
}
const fetchdatarequest = (payload) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload,
  };
};
const fetchdatasuccess = (payload) => {
  savedata(payload)
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};

const Saveserch=(payload)=>{
  return{
    type:types.FETCH_SEARCH_DATA,
    payload,
  }
}
const Fetchdata = (payload) => {
  return (dispatch) => {
    dispatch(fetchdatarequest());
    axios
      .get(
        `https://api.unsplash.com/search/collections?client_id=Zhn8M89zijqkGq942YLJXRjw0T2NX5CVRnGIRblXdsA&page=1&query=${payload}`
      )
      .then((r) => dispatch(fetchdatasuccess(r.data.results)))
      .catch((r) => dispatch(fetchdatafailure(r.data)));
  };
};

export {
  Fetchdata,
  Saveserch
};
