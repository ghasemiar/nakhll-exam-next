"use client";
import React from "react";
import { Field } from "formik";

interface Props {
  name: string;
  type?: string;
  placeholder?: string;
}

const FormikField = ({ name, type = "text", placeholder }: Props) => (
  <div>
    <Field
      className="tw-input tw-input-bordered tw-w-full tw-m-2"
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
    />
  </div>
);

export default FormikField;
