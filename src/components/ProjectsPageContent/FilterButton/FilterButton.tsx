import React from 'react'

import styles from './FilterButton.module.css'

interface FilterButtonProps {
  children: React.ReactNode;
  value: string;
  onClick: (e) => void;
}

const FilterButton = ({ children, value, onClick, ...props }: FilterButtonProps) => {
  return (
    <button {...props} value={value} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default FilterButton