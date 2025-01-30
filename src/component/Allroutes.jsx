import { Routes ,Route} from "react-router-dom"
import { Renders } from "./pages/3Drender"
import { Architecture } from "./pages/Architecture"
import { Business } from "./pages/Business"
import { Current } from "./pages/Current"
import { Experimental } from "./pages/Experimental"
import { Fashion } from "./pages/Fashion"
import { Film } from "./pages/Film"
import { Food } from "./pages/Food"
import { Interiors } from "./pages/INteriors"
import { Login } from "./pages/Login"
import { Nature } from "./pages/Nature"
import { People } from "./pages/People"
import { Register } from "./pages/Register"
import { Search } from "./pages/Search"
import { Texture } from "./pages/Textures"
import { Wallpaper } from "./pages/Wallpaper"




export const Allroutes=()=>{

    return(
        <Routes>
            <Route path="/" element={<Current/>}></Route>
            <Route path="/wallpaper" element={<Wallpaper/>}></Route>
            <Route path="/3drenders" element={<Renders/>}></Route>
            <Route path="/textures" element={<Texture/>}></Route>
            <Route path="/experimental" element={<Experimental/>}></Route>
            <Route path="/architecture" element={<Architecture/>}></Route>
            <Route path="/nature" element={<Nature/>}></Route>
            <Route path="/business" element={<Business/>}></Route>
            <Route path="/fashion" element={<Fashion/>}></Route>
            <Route path="/film" element={<Film/>}></Route>
            <Route path="/food" element={<Food/>}></Route>
            <Route path="/people" element={<People/>}></Route>
            <Route path="/interiors" element={<Interiors/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}