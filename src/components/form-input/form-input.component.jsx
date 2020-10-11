import React from "react";

import {FormInputContainer, FormInputLabel, GroupContainer} from "./form-input.styles";

const FormInput = ({handleChange, label, ...otherProps}) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} autoComplete={"off"}/>
      {
        label
        ? <FormInputLabel isEmpty={!!otherProps.value.length}>{label}</FormInputLabel>
        : null
      }
    </GroupContainer>
  )
};

export default FormInput;