import { RiShoppingCart2Line } from "react-icons/ri";
import './header.styles.css'


const Header= () =>{
  return(
    <div className="header-container">
        <h2 className="header-title">CLUB CLOTHING</h2>      

        <div className="header-items">
          <div className="header-item">Explorar</div>
          <div className="header-item">Login</div>
          <div className="header-item">Criar Conta</div>
          <div className="header-item">           
           <RiShoppingCart2Line size={25}/>
          </div>
        </div>     
    </div>
  )
}

export default Header