import React from 'react';
import QRCode from "react-qr-code";
import "./QR.css"

const QR = () => {
    return (
      <div class="body pt-5 pb-5">
          <div class="container d-flex justify-content-between align-items-center">
            <div>
              <h1 class="mb-4">Welcome to oneBankQR</h1>
              <h5 class="mb-3">Scan the QR Code now to establish your financial relationship!</h5>
              <button class="btn btn-dark">
                Click the button to establish a relationship
              </button>
            </div>
            <div class="card p-5">
              <div class="cardbody">
                <h5>Scan with your bank's app</h5>
                <div class="mb-3">to register</div>
                <div class="qr mb-3">
                <QRCode value='https://qh2yo2dvoh.execute-api.ap-southeast-1.amazonaws.com/qr'/>
                </div>
              <div class='text-center'>
                Use Password to log in instead
              </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default QR;