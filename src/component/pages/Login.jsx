import {Box,Button ,Text,FormControl,FormLabel,Input,FormHelperText,FormErrorMessage}from "@chakra-ui/react";
import { useState } from "react";
import "./login.css"
import { useDispatch, useSelector } from "react-redux";
import { Postlogin } from "../../Redux/AuthRedux/action";
import { useNavigate,Link } from "react-router-dom";

export const Login=()=>{
    
    const error=useSelector((store)=>store.userData.error)
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [input, setInput] = useState('')
    const [pass,setPass]=useState("");
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''
    const handleSubmit=()=>{
     
       dispatch(Postlogin({email:input,password:pass}))
      
        check()
    
     
    }
    const user=useSelector((store)=>store.userData.user)
    const check=()=>{
      console.log(user.token)
      if(user.token!=undefined){
          
        alert("login Success")
     
      navigate("/",{replace:true})
     }

     else{
    
        if(error==undefined||error!=""){
          alert("entered email or password is wrong")
        }
     }
    
    }
    
    return(
      <Box style={{backgroundImage:"url(https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",background:"cover",width:"100%",height:"770px"}}>
        <Box paddingTop={"120px"} w={"30%"} marginLeft={"33%"}  position={"fixed"} >
            <Text fontSize={"32px"} color={"white"} fontWeight={"bold"}> Login</Text>
            {/* <form onSubmit={handleSubmit}> */}
      <FormControl isInvalid={isError}  >
        <FormLabel htmlFor='email' fontSize={"20px"} color={"white"}>Email</FormLabel>
        <Input
          id='email'
          color={"white"}
          type='email'
          
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage fontWeight={"bold"}>Email is required.</FormErrorMessage>
        )}
        <FormLabel htmlFor='password'fontSize={"20px"} color={"white"}>Password</FormLabel>
        <Input id="password" color={"white"} onChange={(e)=>setPass(e.target.value)} type="password" />
        <Button marginBottom={"20px"} w={"50%"} color={'white'} type='submit' onClick={handleSubmit}  background={"rgb(40,116,240)"} marginTop={"35px"}>Submit</Button>
        <br/>
        <Link  to="/register"><Text fontWeight={"bold"} fontSize={"25px"} id="belwtxt" color={"rgb(220,226,231)"}>Don't have an account? Join Unsplash</Text></Link>
      </FormControl>
      {/* </form> */}
      </Box>
      </Box>
    )

}