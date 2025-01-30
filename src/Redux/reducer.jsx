import * as types from "./actionTypes";
const initState={
    pictures:[],
    error:"",
    loading:false,
    ser:"",
    statid:{},
}

 const handleReducer=(state=initState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.FETCH_DATA_REQUEST:
            return{
                ...state,
                error:"",
                loading:true,
            }
        case types.FETCH_DATA_SUCCESS:
            return{
                ...state,
                pictures:payload,
                error:"",
                loading:false,

            }
        case types.FETCH_DATA_FAILURE:
            return{
                ...state,
                error:payload,
                loading:false,

            }
        case types.SAVE_STAT_ID:
            return{
                ...state,
                error:"",
                statid:payload,
            }
        case types.FETCH_SEARCH_DATA:
            return{
                ...state,
                error:"",
                ser:payload,
            }
        default:
            return state;
    }
}
export default handleReducer