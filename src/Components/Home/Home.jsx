import React from 'react'
import SideBar from '../SideBar/SideBar'
import NavBar from '../NavBar/NavBar'
import './Home.scss'
import Widgets from '../Widget/Widgets'
import Featured from '../Featured/Featured'
import Chart from '../Chart/Chart'
import Table from '../Table/Table'


const Home = () => {
  return (
    <div className='home'> 
      <SideBar/>

      <div className="homeContainer">
        <NavBar/>
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="product" />
        </div>  
        <div className="charts">
           <Featured/>
           <Chart title="Last 6 Months Revenue" aspect={2 / 1}/>
        </div>  
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <Table/>
        </div>  
        </div>
        </div>

  )
}

export default Home
