import React, { useContext, useState } from 'react'
// import cn from 'classnames'

import styles from './style.module.css'
import StoreContext from '../../store'

const THEME = {
  light: 'Light',
  dim: 'Dim',
  dark: 'Dark'
}

function ThemeSelect({}) {
  const store = useContext(StoreContext)

  return (
    <div className={styles.container}>
      {['light', 'dim', 'dark'].map((theme) => (
        <label key={theme} className={styles.label}>
          <input
            type="radio"
            value={theme}
            name="theme"
            checked={theme === store.theme}
            onChange={(e) => store.changeTheme(e.target.value)}
          />
          {THEME[theme]}
        </label>
      ))}
    </div>
  )
}
export default ThemeSelect
