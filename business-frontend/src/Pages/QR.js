import React from 'react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

class QR extends React.Component {
  render() {
    return (
        <div>
          <QRCode value='https://qh2yo2dvoh.execute-api.ap-southeast-1.amazonaws.com/qr'/>
        </div>
    );
  }
}

export default QR;