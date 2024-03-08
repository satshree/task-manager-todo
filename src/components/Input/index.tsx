import { useEffect, useState } from "react";
import { InputProps } from "../../types/props";

import style from "./input.module.css";

function Input(props: InputProps) {
  const [value, setValue] = useState(props.value);

  useEffect(() => props.onChange(value), [value]);

  return (
    <div className={style["input-wrapper"]}>
      {props.label ? (
        <label className={style.label}>{props.label}</label>
      ) : null}
      <input
        className={`${style["input-control"]} ${props.className}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={props.placeholder || ""}
        required={props.required || false}
        disabled={props.disabled || false}
      />
    </div>
  );
}

export default Input;
