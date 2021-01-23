import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      return closeModal();
    }, 2000);
  });
  return (
    <div className="modal">
      <h2> {modalContent} </h2>
    </div>
  );
};

export default Modal;
