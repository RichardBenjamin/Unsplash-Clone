import {Box,Button ,Text,FormControl,FormLabel,Input,FormHelperText,FormErrorMessage}from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Postuser } from "../../Redux/AuthRedux/action";
import { useNavigate,Link } from "react-router-dom";
import "./reg.css";

export const Register=()=>{
    const user=useSelector((store)=>store.userData.reg)
    const dispatch = useDispatch();
    const [input, setInput] = useState('')
    const [pass,setPass]=useState("");
    const handleInputChange = (e) => setInput(e.target.value)
     const navigate=useNavigate();
    const isError = input === ''
  const hnadleSubmit=()=>{
     dispatch(Postuser({email:input,password:pass}))
     if(user.token==undefined){
        alert("something went wrong try again using diffrent Email")
     }
     else{
        navigate("/login",{replace:true})
     }
  }
    return (
      <Box id="main" paddingTop={"120px"} >
        <Box id="imgdiv" style={{backgroundImage:"url(https://images.unsplash.com/photo-1655322974108-b997c6e2e24d?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb)"}}>
          <Box id="inter">
           <Text className="txt" fontSize={"60px"} margin={"auto"} fontWeight={"bold"} color={"white"}>Creation starts here</Text>
           <Text color={"white"} fontSize={"25px"} fontWeight={"medium"}>access 3,969,624 free, high resolution photos you can't find anywhere else</Text>
           </Box>
        </Box>
        <Box  w={"60%"} margin={"auto"}>
            <Text fontSize={"24px"} fontWeight={"bold"}> Register</Text>
      <FormControl isInvalid={isError} >
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          id='email'
          
          type='email'
          
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
        <FormLabel htmlFor='password'>Password</FormLabel>
        <Input id="password" onChange={(e)=>setPass(e.target.value)} type="password" />
        <Button w={"50%"} onClick={hnadleSubmit} background={"rgb(40,116,240)"} marginTop={"35px"}>Submit</Button>
        <Link to="/login"><Text id="regtxt" color={"blue"}>already have an account?</Text></Link>
      </FormControl>
      </Box>
      </Box>
    )
}