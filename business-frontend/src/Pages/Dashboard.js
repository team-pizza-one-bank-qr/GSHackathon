import "./Dashboard.css";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [showModal, setShowModal] = React.useState(true);
  const API_client =
    "https://qh2yo2dvoh.execute-api.ap-southeast-1.amazonaws.com/v1/clients";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${API_client}`)
    .then((res) => res.json())
    .then((json) => setData(json.data));
  }, []);
  
  return (
    <div class="m-5">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">ClientID</th>
            <th scope="col">Name</th>
            <th scope="col">More</th>
          </tr>
        </thead>
        <tbody>      
          {data.map((client) => (
            <tr>
              <td>{client.client_id}</td>
              <td>{client.name}</td>
              <td>
              <button
                type="button"
                class="btn btn-light"
                data-toggle="modal"
                data-target="#myModal"
                onClick={() => setShowModal(true)}
              >
                More Client Info
              </button>
              {showModal ? (
                <div className="client-info-card">
                  <div className="p-2">
                    <div className="">
                      <div className="">
                        <h3 className="text-3xl font-semibold">
                        {client.name}
                        </h3>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          Are you sure you want to proceed to establish the
                          financial Relationship with business id{" "}
                          By Agreeing, the process is non-revertible.
                          <div className="mt-4">
                            Click no if you wish to stop this process.
                          </div>
                        </p>
                      </div>
                      <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="btn btn-light"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="btn btn-dark"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Agree
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
