import React from 'react'
import styles from './style.module.css'
import Button from '../button'
import Photo from '../photo'
import TextBody from '../text/body'
import ExtraButton from '../extra-box/button'

function FollowItem({ name, slug }) {
  return (
    <ExtraButton href="#" className={styles.button}>
      <Photo />
      <div className={styles.body}>
        <TextBody bold className={styles.name}>
          {name}
        </TextBody>
        <TextBody className={styles.slug}>@{slug}</TextBody>
      </div>
      <Button className={styles.followButton}>
        <span>Follow</span>
      </Button>
    </ExtraButton>
  )
}

export default FollowItem
