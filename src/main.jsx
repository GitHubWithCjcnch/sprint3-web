import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Home from './routes/Home.jsx'
import Erro404 from './routes/Erro404.jsx'
import Projeto from './routes/Projeto.jsx'
import About from './routes/AboutUs.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Erro404/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/projeto",
        element:<Projeto/>
      },
      {
        path: "/sobre",
        element:<About/>
      }
    ]

  }
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)

export default App