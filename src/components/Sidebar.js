import home from '../pics/home.png'
import mail from '../pics/mail.png'
import '../styles/Sidebar.css'
import {useNavigate} from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    return ( 
        <div id="Sidebar">
            <div className="VStack" id='VS1' onClick={() => navigate('/Hyde_St')}>
                <img src={home}alt="home" />
                <p>Home</p>
            </div>
            <div className="VStack" id='VS2' onClick={() => navigate('/contact')}>
                <img src={mail} alt="mail" />
                <p>Contact</p>
            </div>
        </div>
    )
}
 
export default Sidebar
