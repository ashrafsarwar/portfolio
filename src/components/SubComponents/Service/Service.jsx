import React from "react";
import "./Service.css";

function Service(props) {
  return (
    <div className="service">
      <div className="service-container">
        <div className="service-icon">{props.icon}</div>
        <div className="service-title">
          <h3>{props.title}</h3>
        </div>
        <div className="service-description">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
