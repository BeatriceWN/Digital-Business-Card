import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav>
            <FaHome /> Home
            <FaInfoCircle /> About
            <FaPhone /> Contact
        </nav>
    );
}