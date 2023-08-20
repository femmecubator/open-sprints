import React from 'react'

import styles from './FilterButton.module.css'

interface FilterButtonProps {
  children: React.ReactNode;
  value: string;
}

const FilterButton = ({ children, value, ...props }: FilterButtonProps) => {
  return (
    <button {...props} value={value} className={styles.button}>
      {children}
    </button>
  );
};

export default FilterButton