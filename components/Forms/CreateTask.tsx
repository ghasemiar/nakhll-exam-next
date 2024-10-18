"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "@/components/Forms/FormikInput";
import { addTask, updateTask } from "@/store/task-slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { TaskItem, TaskItemInputs } from "@/types";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});
interface Props {
  id?: string;
  afterDone: () => void;
}
const CreateTask = ({ id, afterDone }: Props) => {
  const [task, setTask] = useState<TaskItem | null>(null);
  const dispatch = useAppDispatch();
  const getTask = useAppSelector((state) => state.task.items);

  useEffect(() => {
    if (id) {
      const findTask = getTask.find((task) => task.id == id);
      if (findTask) {
        setTask(findTask);
      }
    }
  }, [id, getTask]); // UseEffect only runs when `id` or `getTask` changes

  const handleCreateTask = (values: TaskItemInputs) => {
    if (task !== null) {
      dispatch(updateTask({ ...values, id: task.id }));
      afterDone();
    } else {
      dispatch(addTask(values));
      afterDone();
    }
  };

  return (
    <Formik
      initialValues={{
        title: task ? task.title : "",
        description: task ? task.description : "",
      }}
      validationSchema={validationSchema}
      enableReinitialize // Ensures the form updates when `task` changes
      onSubmit={(values) => {
        handleCreateTask(values);
      }}
    >
      {() => (
        <Form>
          <FormikInput name="title" placeholder="عنوان وظیفه را بنویسید" />
          <FormikInput
            name="description"
            placeholder="توضیحات وظیفه را بنویسید"
          />
          <button className="tw-btn tw-btn-accent" type="submit">
            ذخیره
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateTask;
