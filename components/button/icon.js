import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

import Button from './index'

function IconButton({ children, forward, className, ...props }) {
  return (
    <Button
      className={cn(styles.iconButton, forward && styles.forward, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export default IconButton
