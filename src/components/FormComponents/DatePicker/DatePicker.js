import React from "react";
import { DatePicker, Label } from "@ui5/webcomponents-react";

const CustomDatePicker = (props) => {
  const { name, label, onChangeHandler, required, disabled } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "210px" }}>
      <Label
        {...props}
        for={name}
        required={required ? required : false}
        children={label}
      />
      <DatePicker
        {...props}
        name="start_date"
        label={"Start Date"}
        disabled={disabled ? disabled : false}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default CustomDatePicker;
