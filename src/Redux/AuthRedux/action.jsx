import axios from "axios";
import * as types from "./actiontypes";

const postrequest=(payload)=>{
    return{
        type:types.REGISTER_REQUEST,
        payload,
    };
};
const postsuccess=(payload)=>{
    return{
        type:types.REGISTER_SUCCESS,
        payload,
    }
}

const postfailure=(payload)=>{
    return{
        type:types.REGISTER_FAILURE,
        payload
    }
}
const loginsuccess=(payload)=>{
    return{
        type:types.LOGIN_REQUEST,
        payload
    }
}
const Logoutreq=(payload)=>{
    return{
        type:types.LOGOUT_REQUEST,
        payload
    }
}
const Postuser=(payload)=>(dispatch)=>{
    dispatch(postrequest())
    axios.post("https://unsplash-with-backend.herokuapp.com/register",payload).then((res)=>dispatch(postsuccess(res.data))).catch((err)=>dispatch(postfailure(err.data)))
}
const Postlogin=(payload)=>(dispatch)=>{
    dispatch(postrequest())
    axios.post("https://unsplash-with-backend.herokuapp.com/login",payload).then((res)=>dispatch(loginsuccess(res.data))).catch((err)=>dispatch(postfailure(err.response.data.message)))
}
export {Postuser,Postlogin,Logoutreq}