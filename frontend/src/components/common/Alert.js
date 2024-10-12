import React  from "react";

function Alert({ message, type = "info", onClose }) {
  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      {onClose && (
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
}

export default Alert;
