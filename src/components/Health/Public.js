import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";

export default function Public() {
  const { id } = useParams();
  const [publicHos, setPublicHos] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/publics/${id}`)
      .then((res) => res.json())
      .then((data) => setPublicHos(data));
  }, [publicHos]);

  return (
    <div className="container">
      <div className="row mt-4 mb-3">
        <div className="col-12">
        <Link to="/publics">Back</Link>
          <h4>Hospital Detail</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h6>{publicHos.ADI}</h6>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="fw-bold">Kategori: </span>
                  <span>{publicHos.ALT_KATEGORI}</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Adres: </span>
                  <span>{publicHos.ADRES}</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Telefon: </span>
                  <span>{publicHos.TELEFON}</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Websitesi: </span>
                  <span>{publicHos.WEBSITESI}</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Acil Servis: </span>
                  <span>{publicHos.ACIL_SERVIS}</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Yatak: </span>
                  <span>{publicHos.YATAK}</span>
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Ambulans: </span>
                  <span>{publicHos.AMBULANS}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
