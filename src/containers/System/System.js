import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom'
import { path } from '../../utils/constant'
import Header from './Header'
import Sidebar from './Sidebar'

const System = () => {
    const {isLoggedIn} = useSelector(state => state.auth)

    if(!isLoggedIn) return <Navigate to={`/${path.LOGIN}`} replace={true} />
  return (
    <div className='w-full flex justify-center flex-col items-center gap-2' >
        <Header/>
        <div className='flex w-full h-screen'>
            <Sidebar/>
            <div className='flex-auto p-4 overflow-y-scroll' ><Outlet/></div>
        </div> 
    </div>
  )
}

export default System