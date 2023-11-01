import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './routes/App-screen/App'
import Start_Screen from './routes/Start-screen/Start'
import Error_Screen from './routes/Error-screen/Error'
import Home_Screen from './routes/Home-screen/Home'
import Login_Screen from './routes/Login-screen/Login'
import Register_Screen from './routes/Register-screen/Register'
import './index.css'
import { AuthGoogleProvider } from './contexts/authGoogle'
import { PrivateRoutes } from './routes/PrivateRoutes/PrivateRoutes'
import Profile_Screen from './routes/Profile-screen/Profile'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthGoogleProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start_Screen />} />
          <Route path='/login' element={<Login_Screen />} />
          <Route path='/register' element={<Register_Screen />} />
          {/* PRIVATE */}
          <Route path='/' element={<PrivateRoutes />}>
            <Route path='home' element={<Home_Screen />} />
            <Route path='profile' element={<Profile_Screen />} />
          </Route>

          <Route path='/profile' element={<PrivateRoutes />}>
            <Route path='/profile' element={<Profile_Screen />} />
          </Route>


          <Route path='/*' element={<Error_Screen />} />

        </Routes>
      </BrowserRouter>
    </AuthGoogleProvider>
    
  </React.StrictMode>,
)
