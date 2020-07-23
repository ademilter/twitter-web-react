import React from 'react'
import cn from 'classnames'

import styles from './body.module.css'

function TextBody({ bold = false, className, children, ...props }) {
  return (
    <span
      className={cn([styles.body, bold && styles.bold, className])}
      {...props}
    >
      {children}
    </span>
  )
}
export default TextBody
