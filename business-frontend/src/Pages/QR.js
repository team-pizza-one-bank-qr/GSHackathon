import React from 'react';
import QRCode from "react-qr-code";
import "./QR.css"

const QR = () => {
    return (
      <div class="body pt-5 pb-5">
          <div class="container d-flex justify-content-between">
            <div>
              <h1 class="mb-5">Welcome to oneBankQR</h1>
              <h3 class="mb-3">Scan the QR Code now to establish your financial relationship!</h3>
              <button class="btn btn-dark">
                Click the button to establish a relationship
              </button>
            </div>
            <div class="card p-5">
              <div class="cardbody">
              <QRCode class="mb-3" value='https://qh2yo2dvoh.execute-api.ap-southeast-1.amazonaws.com/qr'/>
              <div>
                Scan the QR Code using your native bank App!
              </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default QR;