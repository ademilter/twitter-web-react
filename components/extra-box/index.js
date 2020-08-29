import React from 'react'
import styles from './style.module.css'
import TextTitle from '../text/title'
import IconButton from '../button/icon'
import { Options } from '../icons'
import Button from '../button'

function ExtraBox({ title, options, children }) {
  return (
    <aside className={styles.extraBox}>
      <div className={styles.header}>
        <TextTitle>{title}</TextTitle>
        {options && (
          <IconButton className={styles.icon}>
            <Options />
          </IconButton>
        )}
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        <Button href="#" className={styles.button}>
          Show More
        </Button>
      </div>
    </aside>
  )
}

export default ExtraBox
