import Statcard from "./Card";
import {
  Box,
  Text,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Tooltip,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Fetchdata } from "../../Redux/action";
import "./imag.css";
import { AiFillLike,AiOutlinePlus } from "react-icons/ai";
import { Inter } from "./InterImage";
export const Food=()=>{
    const red = useSelector((store) => store.imageData.pictures);
  const dispatch = useDispatch();
  const [num,setNum]=useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [address, setAddress] = useState("");
  const [back, setBack] = useState(JSON.parse(localStorage.getItem("btn")));
  console.log(red);
  //console.log(red.results[0].preview_photos)
  useEffect(() => {
    if (red.length === 0) {
      dispatch(Fetchdata("food"));
    }
    if(num===0){
        dispatch(Fetchdata("food"))
        setNum((num)=>num+1)
    }
  }); 
  let detail = JSON.parse(localStorage.getItem("btn"));
  const handleclassid = (e) => {
    console.log(e);
    if (detail[`a${e}`] == false) {
      detail[`a${e}`] = true;
      localStorage.setItem("btn", JSON.stringify(detail));
      setBack(detail);
    } else {
      detail[`a${e}`] = false;
      localStorage.setItem("btn", JSON.stringify(detail));
      setBack(detail);
    }
  };
    return(
        <Box>
        <Box display={"grid"} style={{
          gridTemplateColumns: "repeat(2,1fr)",
          paddingTop: "100px",
          
        }}>
            <Box margin={"50px"}>
                <Text fontSize={"30px"} fontWeight={"bold"}  textAlign={"left"}>Food & Drink</Text>
                <Text marginLeft={"-5px"}>It’s time to indulge, and throw yourself into the world of culinary photography — with shots of elaborate dinner parties, decadent pastries and more.</Text>
            </Box>
            <Box>
               <Statcard props={"Submit to Food & Drink"}/>
            </Box>
        </Box>
        <Box className="main">
        {red.map((e) =>
          e.preview_photos.map((e, i) => (
            <Box
              onClick={() => setAddress(e.urls.full)}
              key={e.id}
              style={{
                backgroundImage: `url(${e.urls.regular})`,
                backgroundSize: "cover",
              }}
              margin="5px"
              height={"370px"}
            >
              <Tooltip hasArrow label="click to see full image">
                <Inter className={`a${e.id}`}>
                  <Box
                    display={"flex"}
                    w={"95%"}
                    margin={"auto"}
                    h={"10%"}
                    justifyContent={"right"}
                  >
                    <Tooltip hasArrow label="like">
                      <Button
                        onClick={() => handleclassid(e.id)}
                        style={
                          back[`a${e.id}`]
                            ? { background: "rgb(241,81,81)" }
                            : { background: "rgb(237,242,247)" }
                        }
                        margin={"5px"}
                      >
                        <AiFillLike />
                      </Button>
                    </Tooltip>
                    <Tooltip hasArrow label="add to favourite">
                      <Button  margin={"5px"}>
                        <AiOutlinePlus />
                      </Button>
                    </Tooltip>
                  </Box>
                  <Box
                    w={"99%"}
                    h={"89%"}
                    onClick={onOpen}
                    boxShadow={
                      "inset rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                    }
                  ></Box>
                </Inter>
              </Tooltip>
            </Box>
          ))
        )}
      </Box>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box
              display={"flex"}
              w={"95%"}
              margin={"auto"}
              h={"95%"}
              justifyContent={"right"}
            >
              <Button marginRight={"5px"}>
                <AiFillLike />
              </Button>
              <Button marginRight={"10px"}>
                <AiOutlinePlus />
              </Button>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={address} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
    )
}