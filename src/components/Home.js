import '../styles/Home.css'
import aboutUs from '../text/aboutUs'
import House1 from '../pics/house1.png'
import Logo from '../pics/logo.png'
import House2 from '../pics/house2.png'

const Home = () => {
    return ( 
        <div id="Home">
            <div className="Title">
                <h2 id="title">HYDE ST INDUSTRIES</h2>
                <div id="Divider"></div>
                <p id="tagline">Here To Help</p>
            </div>
            <div id="AboutUs">
                <p>{aboutUs}</p>
            </div>
            <div id="Logos">
                <img src={House1} alt="House1" />
                <img src={Logo} alt="Logo" id="Logo" />
                <img src={House2} alt="House2" />
            </div>
        </div> 
    )
}
 
export default Home