import {useContext} from 'react'
import "./NavBar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { DarkModeContext } from "../../Context/DarkModeContext";

const NavBar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
            <input type="text" placeholder='Search' />
            <SearchIcon/>
        </div>
        <div className="items">
            <div className="item">
              <LanguageIcon className="icon"/>
              English
            </div>
            <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon"/>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon"/>
              <div className="counter">2</div>
            </div>
            <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
