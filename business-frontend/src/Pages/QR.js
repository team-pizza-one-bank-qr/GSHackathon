import QRCode from "react-qr-code";
import "./QR.css";

import React, { useState, useEffect } from "react";

const QR = () => {
  let [QrImage, setQrImage] = useState(null);
  // 3. Create out useEffect function
  useEffect(() => {
    fetch(
      "https://qh2yo2dvoh.execute-api.ap-southeast-1.amazonaws.com/v1/qr?business_id=VjxyaCM8KzUOczsP"
    )
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        data.success && setQrImage(data.data);
      });
  }, []);

  return (
    <div class="body pt-5 pb-5">
      <div class="container d-flex justify-content-between align-items-center">
        <div>
          <h1 class="mb-4">Welcome to OneBankQR</h1>
          <h5 class="mb-3">
            Scan the QR Code now to establish your financial relationship!
          </h5>
        </div>
        <div class="card p-5">
          <div class="cardbody">
            <h5>Scan with your bank's app</h5>
            <div class="mb-3">to register</div>
            <div class="qr mb-3">
              <div className="App">{QrImage && <QRCode value={QrImage} />}</div>
            </div>
            <div class="pw text-center">Use Password to log in instead</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QR;
