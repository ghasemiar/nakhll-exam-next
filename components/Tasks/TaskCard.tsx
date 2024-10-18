"use client";
import { changeState, removeTask } from "@/store/task-slice";
import AppModal from "@/components/AppModal";
import CreateTask from "@/components/Forms/CreateTask";
import React, { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { TaskItem } from "@/types";

const TaskCard = ({ task }: { task: TaskItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="tw-p-5 tw-border tw-rounded-xl" key={task.id}>
      <div className="card-content">
        <h3 className="tw-text-2xl dark:tw-text-white">{task.title}</h3>
        <p className="tw-mt-3">{task.title}</p>
        <div>
          {task.completed ? (
            <div>
              وضعیت : <span className="tw-text-green-500">تکمیل شده</span>
            </div>
          ) : (
            <div>
              وضعیت : <span className="tw-text-red-500">تکمیل نشده</span>
            </div>
          )}
        </div>
      </div>
      <div className="tw-divider"></div>
      <div className="card-actions tw-grid tw-grid-cols-2 tw-gap-2">
        <button
          className="tw-btn tw-btn-error"
          onClick={() => dispatch(removeTask(task.id))}
        >
          حذف
        </button>
        <button className="tw-btn tw-btn-accent" onClick={handleOpenModal}>
          ویرایش
        </button>
        <AppModal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h3 className="tw-text-xl">ویرایش وظیفه</h3>
          <CreateTask id={task.id} afterDone={handleCloseModal} />
        </AppModal>
        <button
          className="tw-btn tw-btn-warning tw-col-span-2"
          onClick={() => dispatch(changeState(task.id))}
        >
          تغییر وضعیت
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
