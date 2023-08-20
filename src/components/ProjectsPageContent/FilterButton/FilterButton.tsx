import React from 'react'

import styles from './FilterButton.module.css'

interface FilterButtonProps {
  children: React.ReactNode;
  value: string;
  onClick: (e) => void;
  isSelected: boolean;
}

const FilterButton = ({ children, value, onClick, isSelected, ...props }: FilterButtonProps) => {
  return (
    <button {...props} value={value} className={`${styles.button} ${isSelected ? styles.selected : null}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default FilterButton