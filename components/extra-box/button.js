import React from 'react'
import styles from './button.module.css'
import Button from '../button'
import cn from 'classnames'

function ExtraButton({ className, children }) {
  return (
    <Button href="#" className={cn(styles.button, className)}>
      {children}
    </Button>
  )
}

export default ExtraButton
