import React from 'react'
import cn from 'classnames'

import Button from '../button'

import styles from './button.module.css'

// TODO: selected durumunda ikonlar dolgulu olacak
function NavigationButton({ notify, selected, children, className, ...props }) {
  return (
    <Button
      className={cn(
        styles.navButton,
        selected && styles.navButtonSelected,
        className
      )}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  )
}

export default NavigationButton
