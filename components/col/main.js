import React from 'react'
import cn from 'classnames'

import styles from './main.module.css'

function Layout({ children }) {
  return <div className={cn(styles.main)}>{children}</div>
}

export default Layout
