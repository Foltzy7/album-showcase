import React from "react";
import {useForm} from "react-hook-form";
import {FormInput} from "../layout/form-input";
import {OrgEvent} from "../../models/orgEvent";
import PageContent from "../layout/pagecontent";

export default function EventForm() {
  const { register, handleSubmit, watch, errors } = useForm<OrgEvent>({
    defaultValues: {
      name: "",
      location: "",
      description: "",
    },
  });
  const nameValue = watch("name");
  const onSubmit = (data: any) => {
      // eslint-disable-next-line no-console
    console.log(nameValue);
      // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <PageContent className={"content-primary"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <FormInput
          register={register}
          name={"name"}
          text={"Event Name"}
          hasError={errors.name}
          errors={errors}
          options={{
            required: "Name is required",
          }}
        />
        <FormInput
          register={register}
          name={"location"}
          text={"Location"}
          hasError={errors.location}
          errors={errors}
          options={{
            required: "Location is required",
          }}
        />
        <FormInput
          register={register}
          name={"description"}
          text={"Description"}
          hasError={errors.description}
          errors={errors}
          options={{
            required: "Description is required",
            minLength: 15,
            maxLength: 20,
          }}
        />
        <input type="submit" />
      </form>
    </PageContent>
  );
}
