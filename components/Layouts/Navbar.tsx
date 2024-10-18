"use client";
import React, { useState } from "react";
import AppModal from "@/components/AppModal";
import CreateTask from "@/components/Forms/CreateTask";
import ToggleTheme from "@/components/Layouts/ToggleTheme";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="tw-m-3">
      <div className="tw-navbar tw-rounded-2xl tw-bg-base-300">
        <div className="tw-navbar-start">
          <span className="tw-btn tw-btn-ghost tw-text-xl">لیست وضایف</span>
        </div>
        <div className="tw-navbar-end tw-grid-cols-2 tw-gap-3">
          <ToggleTheme />
          <button
            className="tw-btn tw-btn-base-content"
            onClick={handleOpenModal}
          >
            افزودن وظیفه
          </button>
          <AppModal isOpen={isModalOpen} onClose={handleCloseModal}>
            <h3 className="tw-text-xl">اضافه کردن یک وظیفه جدید</h3>
            <CreateTask afterDone={handleCloseModal} />
          </AppModal>
        </div>
      </div>
    </div>
  );
}
