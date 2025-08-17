import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
    return (
        <div className="contact-info">
            <div className="contacr-row">
                 <FaPhone className="icon"/>
                 <span>+254 728 459 520</span>
            </div>
            <div className="contacr-row">
                <FaEnvelope className="icon"/>
                <span>bettyneema2@gmail.com</span>
            </div>
        </div>
    )
}
