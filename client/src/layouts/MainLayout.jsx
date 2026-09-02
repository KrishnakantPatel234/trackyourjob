import React from 'react'
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
        <nav className="flex justify-between gap-10" >
            <p>something</p>
            <p>something</p>
            <p>something</p>
            <p>something</p>
        </nav>
        <Outlet/>
    </div>
  )
}

export default MainLayout