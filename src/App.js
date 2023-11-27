import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './Components/SignIn'
import PublicRoute from './PublicRoute'
import Dashboard from './Components/Dashboard'
import Logout from './Components/Logout'
import PrivateRoute from './PrivateRoute'
import PageNotFound from './Components/PageNotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicRoute Component={SignIn}/>}/>
        <Route path='/signin' element={<PublicRoute Component={SignIn}/>}/>
        <Route path='/dashboard' element={<PrivateRoute Component={Dashboard}/>}/>
        {/* <Route path='*' element={<PublicRoute Component={SignIn}/>}/> */}
        <Route path="/logout" element={<PublicRoute Component={Logout}/>}/>
         {/* The "*" matches any other route not specified above */}
         <Route path='*' element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App