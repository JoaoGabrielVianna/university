import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './routes/App-screen/App'
import Error_Screen from './routes/Error-screen/Error'
import Home_Screen from './routes/Home-screen/Home'
import Login_Screen from './routes/Login-screen/Login'
import Register_Screen from './routes/Register-screen/Register'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error_Screen/>,
    children: [
      {
        path: '/',
        element: <Home_Screen />
      },
      {
        path: '/login',
        element: <Login_Screen/>
      },
      {
        path: '/register',
        element: <Register_Screen/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <Login_Screen/> */}
    {/* <Register_Screen /> */}
    {/* <App /> */}
  </React.StrictMode>,
)
