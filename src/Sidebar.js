import user from './user (3).png'
import wish from './heart.png'
import usd from './united-states.png'
import eur from './european-union.png'
import un from './united-kingdom.png'
import jp from './japan.png'
function Sidebar(){
    return(
        <aside>
          <div className="inner-sidebar">
                <div className="sidebar-user"><img  src={user} alt="user"/> <h3>Customer Login</h3></div>
                <div className="sidebar-wish"><img  src={wish} alt="wishlist"/><h3>Wish Lists</h3></div>
                <div className="currencies">
                    <h3>Currency</h3>
                    <div className="currency">
                        <div><img src={usd} alt=""/><h4>USD</h4></div>
                        <div><img src={eur} alt=""/><h4>EUR</h4></div>
                        <div><img src={jp} alt=""/><h4>JPY</h4></div>
                        <div><img src={un} alt=""/><h4>GBP</h4></div>
                    </div>
                </div>
          </div>
        </aside>
    )
}

export default Sidebar;