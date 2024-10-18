"use client";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const AppModal = ({ isOpen, onClose, children }: Props) => {
  return (
    <div>
      {isOpen && (
        <div className="tw-modal tw-modal-open">
          <div className="tw-modal-box">
            {children}
            <div className="tw-modal-action">
              <button className="tw-btn" onClick={onClose}>
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppModal;
