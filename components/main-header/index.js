import React from 'react'
import styles from './style.module.css'
import TextTitle from '../text/title'
import IconButton from '../button/icon'
import { TimelineProp } from '../icons'

function MainHeader() {
  return (
    <div className={styles.mainHeader}>
      <TextTitle>Home</TextTitle>
      <IconButton className={styles.icon}>
        <TimelineProp />
      </IconButton>
    </div>
  )
}

export default MainHeader
