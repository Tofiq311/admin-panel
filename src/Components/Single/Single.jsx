import React from 'react'
import './Single.scss'
import SideBar from '../SideBar/SideBar'
import NavBar from '../NavBar/NavBar'
import Chart from "../Chart/Chart";
import List from "../Table/Table";
import userpic from "../../assets/userpic.png";

const Single = () => {
  return (
    <div className='single'>
      <SideBar/>
      <div className="singleContainer">
        <NavBar/>

        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={userpic}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Tofiquel Alam</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">admin@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+88 02345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Dhaka, Bangladesh
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>

      </div>
    </div>
  )
}

export default Single
