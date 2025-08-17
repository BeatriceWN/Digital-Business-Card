import ContactInfo from "./Components/ContactInfo";
import Link from "./Components/Link";
import Navbar from "./Components/Navbar";
import ProfileCard from "./Components/ProfileCard";
import QRCodeSection from "./Components/QRCodeSection";

export default function App() {
  return (
    <>
    <ProfileCard />
    <ContactInfo />
    <Link />
    <QRCodeSection />
    <Navbar />
    </>
  )
}