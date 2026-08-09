import React from "react";
import "./Thanks.css";

function Thanks() {
  return (
    <div className="thanks-page">
      <div className="thanks-container">
        <div className="thanks-icon">
          <svg viewBox="0 0 24 24" width="64" height="64">
            <path
              fill="#2aabee"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
        </div>
        <h1>Thanks for Connecting</h1>
        <p>Your account has been successfully connected.</p>
      </div>
    </div>
  );
}

export default Thanks;