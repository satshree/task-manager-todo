import { useEffect, useState } from "react";
import { InputChangeHandler, InputProps } from "../../types/props";
import style from "./input.module.css";

function Input(props: InputProps) {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleChange: InputChangeHandler = (e) => {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  return (
    <div className={style["input-wrapper"]}>
      {props.label && <label className={style.label}>{props.label}</label>}
      <input
        className={`${style["input-control"]} ${props.className}`}
        onChange={handleChange}
        value={value || props.value}
        placeholder={props.placeholder || ""}
        required={props.required || false}
        disabled={props.disabled || false}
      />
    </div>
  );
}

export default Input;
