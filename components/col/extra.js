import React from 'react'
import cn from 'classnames'

import styles from './extra.module.css'

function Sidebar({ children }) {
  return <div className={cn(styles.extra)}>{children}</div>
}

export default Sidebar
