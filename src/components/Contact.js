import '../styles/Contact.css'
import Watch from '../pics/watch.png'
import Mail from '../pics/mail.png'
import Link from '../pics/link.png'

const Contact = () => {
    return (
        <div id="Contact">
            <div className="Title">
                <h2 id="title">CONTACT US</h2>
                <div id="Divider"></div>
            </div>
            <div id="Info">
                <div id="Office" className="info-stack">
                    <div className="header">
                        <img src={Watch} alt="Watch" />
                        <h3>Office Hours</h3>
                    </div>
                    <div className="info-box">
                        <p>Mon - Fri</p>
                        <p>9am - 5pm PST</p>
                    </div>
                </div>
                <div id="Email" className="info-stack">
                    <div className="header">
                        <img src={Mail} alt="Mail" id="Mail" />
                        <h3>Email</h3>
                    </div>
                    <div className="info-box">
                        <p>foobar@gmail.com</p>
                        <p>foobar@gmail.com</p>
                    </div>
                </div>
                <div id="Links" className="info-stack">
                    <div className="header">
                        <img src={Link} alt="Link" id="Link" />
                        <h3>Links</h3>
                    </div>
                    <div className="info-box">
                        <p>google.com</p>
                        <p>youtube.com</p>
                        <p>gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Contact