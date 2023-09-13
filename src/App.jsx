// import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './componentes/Menu'

function App() {

  return (
    <>
      <Menu/>
      <Outlet/>
    </>
  )
}

export default App
