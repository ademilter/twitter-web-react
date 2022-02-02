import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function Stack({
  gap = 10,
  column = false,
  center = false,
  border = false,
  row = false,
  small = false,
  children,
  className
}) {
  return (
    <div
      className={cn([
        styles.stack,
        column && styles.column,
        center && styles.center,
        row && styles.row,
        border && styles.border,
        small && styles.small,
        className
      ])}
      style={{ '--gap': `${gap}px` }}
    >
      {children}
    </div>
  )
}
export default Stack

