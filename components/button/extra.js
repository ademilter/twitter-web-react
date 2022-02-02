import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

import Button from './index'

function ExtraButton({ children, className }, ...props) {
  return (
    <Button href="#" className={cn(styles.extraButton, className)} {...props}>
      {children}
    </Button>
  )
}

export default ExtraButton
