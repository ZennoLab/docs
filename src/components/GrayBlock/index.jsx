import React from 'react';
import styles from './styles.module.css';

export const GrayBlock = ({ children, isFooter = false }) => {
  const Component = isFooter ? 'footer' : 'section';

  return (
  <Component className={styles.grayBlock}>
    {children}
  </Component>
)
}
