import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeSection() {
    return (
        <div className="qr-card">
           <h3>Share</h3>
           <QRCodeCanvas value="https://github.com/BeatriceWN/Digital-Business-Card" size={200} />
        </div>
    )
}
