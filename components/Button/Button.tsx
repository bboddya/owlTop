import React from 'react';
import { IButton } from './Button.props';

import ArrowIcon from './arrow.svg';

import styles from './Button.module.css';
import cn from 'classnames'; //библиотека для передачи классов по условию

export const Button = ({
  appearance,
  children,
  arrow = 'none',
  className,
  ...props
}: IButton): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}

      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
