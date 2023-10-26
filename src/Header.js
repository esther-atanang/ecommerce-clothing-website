import logo from './anything-goes-logo.png'
import menu from './menu (1).png'
import profile from './user (3).png'
import  cart from './shopping-cart-add (1).png'
function Header({isScrolling,onOpen}){
    return(
        <nav className={ isScrolling ? `scroll-nav` : ''}>
            <div className="inner-container">
            <div className='menu'>
                <div onClick={onOpen}><img src={menu} alt="menu"/></div>
              
            </div>
            <div className="logo-container"><img className="logo" src={logo} alt="logo"/></div>
            <div className="your-stuff">
                 <div><img src={profile} alt="profile"/></div>
                 <div><img src={cart} alt="cart"/></div>
            </div>
            </div>   
        </nav>
    )
}

export default Header;