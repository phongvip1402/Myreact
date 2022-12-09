import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>User</span>
          </li>
          <li>
            <StoreIcon className='icon' />
            <span>Products</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon  className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
      <div className="bottom">
        <div
          className="colorOption"    
        ></div>
        <div
          className="colorOption"
        ></div>
      </div>
      </div>
    </div>
  );
}

export default Sidebar;
