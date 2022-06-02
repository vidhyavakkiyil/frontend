import React from "react";
import { Input } from "@ui5/webcomponents-react";
import { Label } from "@ui5/webcomponents-react";

const CustomInput = (props) => {
  const {
    name,
    label,
    type,
    icon,
    onChangeHandler,
    placeholder,
    readonly,
    required,
    showClearIcon,
    value,
  } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label
        {...props}
        for={name}
        required={required ? required : false}
        children={label}
      />
      <Input
        {...props}
        id={name}
        name={name}
        label={label}
        type={type}
        icon={icon}
        placeholder={placeholder}
        readonly={readonly}
        required={required}
        showClearIcon={showClearIcon}
        value={value}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
};

export default CustomInput;
