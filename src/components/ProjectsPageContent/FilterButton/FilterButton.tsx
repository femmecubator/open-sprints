import React from "react";

import styles from "./FilterButton.module.css";

type ButtonType = "button" | "submit" | "reset";

export interface FilterButtonProps extends React.HTMLProps<HTMLButtonElement> {
  isSelected: boolean;
  type?: ButtonType;
}

const FilterButton = ({
  children,
  value,
  onClick,
  isSelected,
  type = "button",
  ...props
}: FilterButtonProps) => {
  return (
    <button
      {...props}
      value={value}
      className={styles.button}
      type={type}
      onClick={onClick}
      style={{ textDecoration: isSelected && "underline" }}
    >
      {children}
    </button>
  );
};

export default FilterButton;
