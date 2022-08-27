import React from "react";
import "./App.css";


const App = () => {
  return (
    <div class="body container">
      <div class="modal card" tabIndex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">Establishing Connection</div>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to establish a relationship with the current Business
                using oneBankQR?
              </p>
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary">
                Yes
              </button>
              <button type="button" class="btn btn-primary btn-dark">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
