import React from "react";
import "./App.css";

const App = () => {
  const [ShowAgree, setShowAgree] = React.useState(false)
  const [showModal, setShowModal] = React.useState(true);

  const Cancel = () => (
    <div id="Cancel">
    <h1 class="msg">You have cancelled the session.</h1>
  </div>
  )
  const Agree = () => (
    <div id="agree">
      <h1 class="msg">You have agreed with establishing the relationship.</h1>
    </div>
  )
  const checkEvent1 = () => {
    setShowModal(false)
    setShowAgree(false)
  }
  const checkEvent2 = () => {
    setShowModal(false)
    setShowAgree(true)
  }
  const queryParams = new URLSearchParams(window.location.search);
  const business_id = queryParams.get("business_id");
  console.log(business_id);
  return (
    <>
      {showModal ? (
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Establish Relationship
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Are you sure you want to proceed to establish the financial Relationship
                    with business id <span className="text-red">{business_id}</span> ? By Agreeing,
                    the process is non-revertible. 
                    <div className="mt-4">Click no if you wish to stop this process.</div>
                  </p>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={checkEvent1}>
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={checkEvent2}>
                    Agree
                  </button>
                </div>
              </div>
            </div>
          </div>
        
      ) :   
    (<div>
    { ShowAgree ? <Agree /> : <Cancel /> }
    </div>)}
    </>
  );
};

export default App;
