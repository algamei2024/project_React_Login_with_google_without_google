import React from 'react'
import TopBar from './component/TopBar'
import SideBar from './component/SideBar'
import Users from './Users'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <TopBar />
      <div className='d-flex'>
        <SideBar />
        <div style={{width:"80%"}}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
