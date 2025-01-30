import {
  Flex,
  Box,
  Image,
  Input,
  Button,
  Menu,

  MenuButton,
  MenuList,
  MenuItem,
 Tooltip
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import {
  AiTwotoneContainer,
  AiOutlineUsergroupAdd,
  AiOutlineAppstore,
  AiTwotoneHdd,
  AiOutlineZhihu,
} from "react-icons/ai";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./nav.css";
import { Fetchdata, Saveserch } from "../Redux/action";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Logoutreq } from "../Redux/AuthRedux/action";

export const Navbar = () => {
  const status = useSelector((store) => store.userData.isAuth);
  const user = useSelector((store) => store.userData.user);
  const navitems = [
    { title: "Current Events", loc: "/" },
    { title: "Wallpaper", loc: "/wallpaper" },
    { title: "3D Renders", loc: "/3drenders" },
    { title: "Textures & Patterns", loc: "/textures" },
    { title: "Experimental", loc: "/experimental" },
    { title: "Architecture", loc: "/architecture" },
    { title: "Nature", loc: "/nature" },
    { title: "Business & Work", loc: "/business" },
    { title: "Fashion", loc: "/fashion" },
    { title: "Film", loc: "/film" },
    { title: "Food & Drink", loc: "/food" },
    { title: "People", loc: "/people" },
    { title: "Interiors", loc: "/interiors" },
  ];
  const dispatch = useDispatch();
  const [indexstart, setIndexstart] = useState(0);
  const [indexend, setIndexend] = useState(4);
  const [text1, setText1] = useState([
    { title: "Current Events", loc: "/" },
    { title: "Wallpaper", loc: "/wallpaper" },
    { title: "3D Renders", loc: "/3drenders" },
    { title: "Textures & Patterns", loc: "/textures" },
  ]);
  const [text2, setText2] = useState("");
  const navigate = useNavigate();
  const [count,setConut]=useState(0)
 useEffect(()=>{
    if(status&&count<1){
      navigate("/",{replace:true})
      setConut((e)=>e+1)
    }
})
  const handlenext = () => {
    if (indexend == 13) {
      return;
    }
    setIndexend((index) => index + 1);
    setIndexstart((index) => index + 1);
    handledisplay();
    console.log(indexend);
  };
  console.log(user);
  const handleprev = () => {
    if (indexstart == 0) {
      return;
    }
    setIndexstart((index) => index - 1);
    handledisplay();
    console.log(indexstart);
  };
  const handledisplay = () => {
    setText1([]);
    let arr = [];
    for (let i = indexstart; i < indexend; i++) {
      arr.push(navitems[i]);
      console.log(navitems[i].title);
    }
    setText1(arr);
    console.log(text1);
  };
  const handlesubmit = (e) => {
    if (e.keyCode == 13) {
      dispatch(Fetchdata(text2));
      navigate("/search", { replace: true });
    }
  };

  const handlelogout = () => {
    if (status) {
      dispatch(Logoutreq());
      navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  };
  return (
    <Box
      w="100%"
      position={"fixed"}
      background={"white"}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      zIndex={"1"}
    >
      <Flex justifyContent={"space-between"}>
        <Box margin={"5px"} >
          <Tooltip hasArrow label="Unsplash">
          <Image
            className="point"
            boxSize="50px"
            paddingBottom={"5px"}
            objectFit="cover"
            src="https://img.icons8.com/ios-filled/2x/unsplash.png"
            alt="logo"
          />
          </Tooltip>
        </Box>
        <Box marginTop="5px" w="80%">
          <Tooltip hasArrow label="search images">
          <Input
            onChange={(e) => setText2(e.target.value)}
            onKeyDown={handlesubmit}
            type="text"
            w="100%"
            placeholder="search photos"
          />
          </Tooltip>
        </Box>
        <Popup
          trigger={
            <Box margin={"5px"}>
              <Tooltip hasArrow label="notification">
              <Image
                className="point"
                boxSize="35px"
                objectFit="cover"
                src="https://img.icons8.com/ios-glyphs/2x/bell.png"
                alt="bell icon"
              />
              </Tooltip>
            </Box>
          }
        >
          <Box>Subscribe and get update on mail</Box>
        </Popup>
        <Popup
          trigger={
            
            <Box
              className="point"
              margin={"5px"}
              border={"1px solid grey"}
              borderRadius={"50px"}
            >
              <Tooltip hasArrow label={status ? `Logout ${user.user.email}` : `login/signup`}>
              <Image
                boxSize="35px"
                objectFit="cover"
                borderRadius={"50px"}
                src="https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/2x/external-User-user-interface-febrian-hidayat-flat-febrian-hidayat.png"
                alt="user icon"
              />
              </Tooltip>
            </Box>
            // </Tooltip>
          }
        >
          <Box>
            <Button borderRadius={"0px"} w={"100%"}>
              Notification
            </Button>
            <Button borderRadius={"0px"} w={"100%"}>
              View profile
            </Button>
            <Button borderRadius={"0px"} w={"100%"}>
              Stats
            </Button>
            <Button borderRadius={"0px"} w={"100%"}>
              Account setting
            </Button>
            <Button borderRadius={"0px"} w={"100%"}>
              Submit a photo
            </Button>
            <Box w={"100%"} border={"1px solid grey"}></Box>
            <Button onClick={handlelogout} borderRadius={"0px"} w={"100%"}>
              {status ? `Logout ${user.user.email}` : `login/signup`}
            </Button>
          </Box>
        </Popup>
        <Popup
          trigger={
            <Box margin={"5px"}>
              <Tooltip hasArrow label="menue"><HamburgerIcon className="point" w="50px" /></Tooltip>
            </Box>
          }
        >
          <Box>
            <Menu>
              <MenuButton
                w={"100%"}
                borderRadius={"0px"}
                as={Button}
                leftIcon={<AiTwotoneContainer />}
                rightIcon={<ChevronDownIcon />}
              >
                Company
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
              <MenuButton
                w={"100%"}
                borderRadius={"0px"}
                as={Button}
                leftIcon={<AiOutlineUsergroupAdd />}
                rightIcon={<ChevronDownIcon />}
              >
                Community
              </MenuButton>

              <MenuButton
                w={"100%"}
                borderRadius={"0px"}
                as={Button}
                leftIcon={<AiOutlineAppstore />}
                rightIcon={<ChevronDownIcon />}
              >
                Product
              </MenuButton>

              <MenuButton
                w={"100%"}
                borderRadius={"0px"}
                as={Button}
                leftIcon={<AiTwotoneHdd />}
                rightIcon={<ChevronDownIcon />}
              >
                Legal
              </MenuButton>

              <MenuButton
                w={"100%"}
                borderRadius={"0px"}
                as={Button}
                leftIcon={<AiOutlineZhihu />}
                rightIcon={<ChevronDownIcon />}
              >
                English
              </MenuButton>
            </Menu>
          </Box>
        </Popup>
      </Flex>
      <Flex justifyContent={"space-around"} id="baritm">
      <Tooltip hasArrow label="prev">
        <Button onClick={handleprev}>
          <ChevronLeftIcon />
         
        </Button>
        </Tooltip>
        {text1.map((e, i) => (
          <Tooltip hasArrow label={e.title}>
          <Box className="coll" margin={"5px"} color={"grey"} key={i}>
            <Link to={e.loc}>{e.title}</Link>
          </Box>
          </Tooltip>
        ))}
        <Tooltip hasArrow label="next">
        <Button onClick={handlenext}>
          <ChevronRightIcon />
        </Button>
        </Tooltip>
      </Flex>
      <Box></Box>
    </Box>
  );
};
