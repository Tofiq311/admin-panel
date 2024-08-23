import {useContext} from 'react'
import "./SideBar.scss"
import { Link } from "react-router-dom";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { DarkModeContext } from "../../Context/DarkModeContext";


const SideBar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className='top'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Panel</span>
        </Link>
        </div>
        <div className='center'>
             <ul>
                <p className='title'>MAIN</p>
                <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                    <DashboardCustomizeIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className='title'>LIST</p>
                <Link to="/users" style={{ textDecoration: "none" }}>
                 <li>
                    <PeopleAltIcon className="icon" />
                    <span>Users</span>
                 </li>
                </Link>
                <Link to="/products" style={{ textDecoration: "none" }}>
                 <li>
                    <ProductionQuantityLimitsIcon className="icon" />
                    <span>Products</span>
                 </li>
                </Link>
                <li>
                    <Inventory2Icon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <DeliveryDiningIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className='title'>USEFUL LINKS</p>
                <li>
                    <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                    <HealthAndSafetyIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <FlutterDashIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className='title'>USER</p>
                <li>
                    <AccountBoxIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
             </ul>
        </div>
        <div className='bottom'>
            <div className='colorOption'onClick={() => dispatch({ type: "LIGHT" })}></div>
            <div className='colorOption'onClick={() => dispatch({ type: "DARK" })}></div>
        </div>
      
    </div>
  )
}

export default SideBar
