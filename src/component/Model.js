// Modal.js
import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4 my-8 overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
        <p className="text-lg">
          Add your detailed information about yourself here...
        </p>
      </div>
    </div>
  );
};

export default Modal;
