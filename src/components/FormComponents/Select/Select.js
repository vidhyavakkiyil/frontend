import React from "react";
import { Select, Option } from "@ui5/webcomponents-react";
import { Label } from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

const CustomSelect = (props) => {
  const { name, label, options, onChangeHandler, required, disabled } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label
        {...props}
        for={name}
        required={required ? required : false}
        children={label}
      />
      <Select
        {...props}
        name={name}
        required={required ? required : false}
        disabled={disabled ? disabled : false}
        onChange={(event) =>
          onChangeHandler(
            event.target.firstElementChild.name,
            event.detail.selectedOption.dataset.id
          )
        }
        label={label}
        //   onChange={(event) => {
        //     console.log(event.detail.selectedOption.dataset.id);
        //   }}
      >
        {options.map((option) => {
          return (
            <Option
              key={option.key}
              data-id={option.key}
              icon={option.icon ? option.icon : ""}
              selected={option.selected ? option.selected : ""}
              //value={option.key}
              text={option.text}
            >
              {option.text}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default CustomSelect;
