import React from 'react'

import style from './style.module.css'
import ExtraButton from '../button/extra'
import SmallText from '../text/small'
import TitleBody from '../text/body'
import { LikeFill } from '../icons'
import IconButton from '../button/icon'
import Photo from '../photo'
import Stack from '../stack'

function NotificationItem({ tweet, name }) {
  return (
    <ExtraButton href="#" className={style.button}>
      <div className={style.notificationContainer}>
        <IconButton>
          <LikeFill />
        </IconButton>
        <div className={style.personContainer}>
          <Stack column gap={5}>
            <Photo size={36} />
            <TitleBody>
              <TitleBody bold>{name}</TitleBody>liked your Tweet
            </TitleBody>
          </Stack>
          <SmallText>
            <span>{tweet}</span>
          </SmallText>
        </div>
      </div>
    </ExtraButton>
  )
}

export default NotificationItem
