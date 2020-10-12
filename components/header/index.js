import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function Header({ children, className, subHeader, back, slug }) {
  return (
    <div
      className={cn(
        styles.header,
        subHeader && styles.subHeader,
        slug && styles.slug,
        back && styles.back,
        className
      )}
    >
      {children}
    </div>
  )
}

export default Header
