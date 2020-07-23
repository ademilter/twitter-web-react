import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function Stack({ gap = 10, column = false, children }) {
  return (
    <div
      className={cn([styles.stack, column && styles.column])}
      style={{ '--gap': `${gap}px` }}
    >
      {children}
    </div>
  )
}
export default Stack
