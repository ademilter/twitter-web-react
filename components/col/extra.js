import React from 'react'
import cn from 'classnames'

import styles from './extra.module.css'

import ProfileExtra from '../extra-col/profile'
import MessagesExtra from '../extra-col/messages'
import MainExtra from '../extra-col/main'
import ExploreExtra from '../extra-col/explore'

function Extra({ explore, messages, profile }) {
  return (
    <div className={cn(styles.extra, messages && styles.messages)}>
      {!messages && !explore && !profile && <MainExtra />}
      {explore && <ExploreExtra />}
      {messages && <MessagesExtra />}
      {profile && <ProfileExtra />}
    </div>
  )
}

export default Extra
