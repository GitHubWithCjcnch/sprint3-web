
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Menu(){
    
    return(
        
    <body>
        <header>
        <div className="menu">
          <img
            src={logo}
            alt="Logo de caminhão"/>
          <nav>
            <ul className="menu-login">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/sobre'>Nosso Time</Link></li>
                <li><Link to='/projeto'>Projeto</Link></li>
              <li><Link to='/login' id='login'>Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>
</body>
    )
}