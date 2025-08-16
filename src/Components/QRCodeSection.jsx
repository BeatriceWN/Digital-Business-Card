import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeSection() {
    return (
        <div>
           <h3>Share</h3>
           <QRCodeCanvas value="https://github.com/BeatriceWN/Digital-Business-Card" />
           <p>Show QR Code</p>
        </div>
    )
}