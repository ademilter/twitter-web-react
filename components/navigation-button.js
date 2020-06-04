import React from 'react'

import Button from './button'

import styles from './navigation-button.module.css'

function NavigationButton({ children }) {
  return <Button className={styles.navButton}>{children}</Button>
}

export default NavigationButton
