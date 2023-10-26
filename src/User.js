function User(){
    return(
        <div className="login">
            <div className="first-block"><h3>Customer Login</h3> </div>
            <div className="second-block">
                <form>
                    <div>
                    <label>Email</label>
                    <input type="text" placeholder="Email"/>
                    </div>
                   <div>
                   <label>Password</label>
                    <input type="text"  placeholder="Password"/>
                   </div>
                   <input type="button" value="login"/>
                </form>
                <a href="#">Forgot your password?</a>
                <input type="button" value="create an account"/>
            </div>
        </div>
    )
}

export default User;