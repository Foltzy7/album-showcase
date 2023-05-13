import React from "react";
import { RegisterOptions } from "react-hook-form";
import classnames from "classnames";
import { ErrorMessage } from "@hookform/error-message";
import "./form-input.scss";

type FormInputProps = {
  register: (options: any) => React.Ref<any>;
  name: string;
  text: string;
  disabled?: boolean;
  options?: RegisterOptions;
  errors: any;
  hasError?: any;
};

export function FormInput(props: FormInputProps) {
  const { register, name, text, disabled, options, errors, hasError } = props;
  const className = classnames("form-group", {
    hasError: hasError,
  });
  return (
    <div className={className}>
      <label htmlFor={name}>{text}</label>
      <input
        id={name}
        name={name}
        disabled={disabled}
        className={"form-control"}
        aria-invalid={errors.name ? "true" : "false"}
        ref={register(options)}
      />
      {errors[name] && errors[name].type === "minLength" && (
        <ErrorMessage errors={errors} name={name} message={`Must be at least ${options?.minLength} characters long`} />
      )}
      {errors[name] && errors[name].type === "maxLength" && (
        <ErrorMessage errors={errors} name={name} message={`Must be no longer than ${options?.maxLength} characters long`} />
      )}
      <ErrorMessage errors={errors} name={name} />
    </div>
  );
}
