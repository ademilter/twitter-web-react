import React from 'react'

import style from './notification-style.module.css'
import IconButton from '../button/icon'
import { Options } from '../icons'
import Header from '../header'
import TitleBold from '../text/title'
import ExtraButton from '../button/extra'

function NotificationTitle() {
  return (
    <div className={style.notification}>
      <Header>
        <TitleBold>Notifications</TitleBold>
        <IconButton>
          <Options />
        </IconButton>
      </Header>
      <div className={style.buttonContainer}>
        <ExtraButton>All</ExtraButton>
        <ExtraButton>Mentions</ExtraButton>
      </div>
    </div>
  )
}

export default NotificationTitle
