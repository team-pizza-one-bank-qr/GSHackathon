import React from 'react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

class QR extends React.Component {
  render() {
    return (
        <div>
          <center><QRCode value="heyiii" /></center>
        </div>
    );
  }
}

export default QR;