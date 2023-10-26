function Cart(){
    return(
       <div className="cart">
            <div className="cart-first"><h3>review your cart</h3></div>
            <div className="cart-second">
                <p>Your cart is currently empty.</p>
                <input type="button" value="continue shopping"/>
            </div>
       </div>
    )
}

export default Cart;