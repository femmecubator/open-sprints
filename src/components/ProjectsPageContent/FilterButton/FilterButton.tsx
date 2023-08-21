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
    <button {...props} value={value} className={styles.button} onClick={onClick} style={{ textDecoration: isSelected && 'underline' }}>
      {children}
    </button>
  );
};

export default FilterButton