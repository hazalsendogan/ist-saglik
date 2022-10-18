import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
export default function Research() {
  const [hospital, setHospital] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/researchAndTraining/${id}`)
      .then((res) => res.json())
      .then((data) => setHospital(data));
  }, [hospital]);
  return (
    <div className="container">
      <div className="row mt-4 mb-3">
        <div className="col-12">
          <Link to="/researchs">Back</Link>
          <h4>Hospital Detail</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h6>{hospital.ADI}</h6>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="fw-bold">Kategori: </span>
                  <span>{hospital.ALT_KATEGORI}</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Adres: </span>
                  <span>{hospital.ADRES}</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Telefon: </span>
                  <span>{hospital.TELEFON}</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Websitesi: </span>
                  <span>{hospital.WEBSITESI}</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Acil Servis: </span>
                  <span>{hospital.ACIL_SERVIS}</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Yatak: </span>
                  <span>{hospital.YATAK}</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Ambulans: </span>
                  <span>{hospital.AMBULANS}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
