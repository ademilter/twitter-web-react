import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

import Photo from '../photo'
import { ArrowBottom } from '../icons'
import Button from '../button'
import TextBody from '../text/body'

function ProfileBox({ flat = false, name = 'Adem ilter', slug = 'ademilter' }) {
  return (
    <Button className={cn([styles.box])}>
      <Photo size={39} />
      {!flat && (
        <>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
          </div>
          <ArrowBottom className={styles.icon} />
        </>
      )}
    </Button>
  )
}
export default ProfileBox
