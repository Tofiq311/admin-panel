import React from 'react'
import './List.scss'
import SideBar from '../SideBar/SideBar'
import NavBar from '../NavBar/NavBar'
import Datatable from '../Datatable/Datatable'



const List = () => {
  return (
    <div className='list'>

      <SideBar/>

      <div className="listContainer">

        <NavBar/>

        <Datatable/>

      </div>
    </div>
  )
}

export default List
