import React from "react";

export default function Modal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto relative">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-orange-500"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Disclaimer</h2>
        <p>
          Please note that all development work on this website was carried out
          by me. The UX design belongs to Kaushal Bodar. You can browse his work
          by clicking on the link below.
          <span>
            <a
              className="block text-orange-500 hover:underline"
              href="https://dribbble.com/kaushal_ui"
              target="_blank"
            >
              https://dribbble.com/kaushal_ui
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
