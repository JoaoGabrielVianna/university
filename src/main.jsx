import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './routes/App-screen/App'
import Start_Screen from './routes/Start-screen/Start'
import Error_Screen from './routes/Error-screen/Error'
import Home_Screen from './routes/Home-screen/Home'
import Login_Screen from './routes/Login-screen/Login'
import Register_Screen from './routes/Register-screen/Register'
import './index.css'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error_Screen />,
//     children: [
//       {
//         path: '/', element: <Start_Screen />
//       },
//       {
//         path: '/login', element: <Login_Screen />
//       },
//       {
//         path: '/register', element: <Register_Screen />
//       },
//       {
//         path: '/home', element: <Home_Screen />
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start_Screen/>}/>
        <Route path='/login' element={<Login_Screen/>}/>
        <Route path='/register' element={<Register_Screen/>}/>
        <Route path='/home' element={<Home_Screen/>}/>
        <Route path='/*' element={<Error_Screen/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
