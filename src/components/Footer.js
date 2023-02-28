import Copyright from '../pics/copyright.png'
import '../styles/Footer.css'

const Footer = () => {
    return ( 
        <div id="Footer">
            <div id ="footer-content">
                <img src={Copyright} alt="Copyright" id="Copyright" />
                <p>2023 by Hyde St Industries</p>
            </div>
        </div> 
    )
}
 
export default Footer