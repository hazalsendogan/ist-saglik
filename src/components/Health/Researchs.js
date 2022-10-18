import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Researchs() {
  const [researchs, setResearchs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/researchAndTraining")
      .then((res) => res.json())
      .then((data) => setResearchs(data));
  }, [researchs]);
  return (
    <div className="container">
      <div className="row mt-4 mb-3">
        <div className="col-12">
          <h3>Research and Training Hospitals</h3>
        </div>
      </div>
      <div className="row">
        {researchs.map((hospital, key) => (
          <div key={key} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-header">
                <h6>{hospital.ILCE_ADI}</h6>
              </div>
              <div className="card-body">
                <p>{hospital.ADI}</p>
              </div>
              <div className="card-footer">
                <Link to={`/research/${hospital.id}`}>See Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
