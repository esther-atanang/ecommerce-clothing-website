import visa from "./visa.svg"
import mastercard from "./mastercard.svg"
import express from "./express.svg"
import discover from "./discover.svg"
import jcb from "./jcb.svg"
import paypal from "./paypal.svg"
function Footer(){
    const year = new Date().getFullYear()
    return(
     <footer>
        <div>
        <div className="footer-copyright">© {year} Esther Atanang. All Rights Reserved. <a href="/pages/terms-of-use">Terms</a>&nbsp;|&nbsp;<a href="/pages/privacy-policy">Privacy</a>. Powered by <a href="https://cozack.net" target="_blank" aria-describedby="a11y-new-window-external-message" rel="noopener">Cozack</a>.</div>
        <div className="link">
            <div><img src={visa} alt=""/></div> 
            <div><img src={mastercard} alt=""/></div>  
            <div><img src={express} alt=""/></div>  
            <div><img src={discover} alt=""/></div>  
            <div><img src={jcb} alt=""/></div>  
            <div><img src={paypal} alt=""/></div>   
        </div>
        </div>
     </footer>
    )
}

export default Footer;