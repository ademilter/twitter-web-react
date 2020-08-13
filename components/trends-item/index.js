import React from 'react'
import styles from './style.module.css'
import IconButton from '../button/icon'
import { ArrowBottom } from '../icons'
import TextSmall from '../text/small'
import TextBody from '../text/body'
import ExtraButton from '../extra-box/button'

function TrendsItem({ order, category, tag, count }) {
  return (
    <ExtraButton href="#" className={styles.button}>
      <div className={styles.content}>
        <TextSmall>
          <span>{order}</span>
          <span className={styles.dot}>·</span>
          <span>{category}</span>
          <span className={styles.dot}>·</span>
          <span>Trending</span>
        </TextSmall>
        <TextBody bold className={styles.tag}>
          {tag}
        </TextBody>
        <TextSmall>{count} Tweets</TextSmall>
      </div>
      <IconButton className={styles.icon}>
        <ArrowBottom />
      </IconButton>
    </ExtraButton>
  )
}

export default TrendsItem
