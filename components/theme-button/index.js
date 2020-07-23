import React from 'react'
import cn from 'classnames'

import Button from '../button'

import styles from './style.module.css'

function ThemeButton({ className, children, big = false, ...props }) {
  return (
    <Button
      className={cn(styles.button, big && styles.bigButton, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ThemeButton
