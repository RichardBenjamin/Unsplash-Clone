import * as types from "./actiontypes";
const initstate={
    
    error:"",
    isAuth:false,
    reg:[],
   user:[],

}
const AuthReducer=(state=initstate,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.REGISTER_REQUEST:
            return{
                ...state,
                error:"",
                isAuth:false,
            }
        case types.REGISTER_SUCCESS:
            return{
                ...state,
               reg:payload,
               isAuth:false,
            }
        case types.REGISTER_FAILURE:
            return{
                ...state,
                error:payload,
                isAuth:false,
            }
        case types.LOGIN_REQUEST:
            return{
                ...state,
              user:payload,
              isAuth:true,
            }
        case types.LOGOUT_REQUEST:
            return{
                ...state,
                user:[],
                isAuth:false,
            }
        default:
            return state
    }
}
export {AuthReducer}