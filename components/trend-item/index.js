import React from 'react'

import style from './style.module.css'
import ExtraButton from '../button/extra'
import SmallText from '../text/small'
import TitleBody from '../text/body'
import { ArrowBottom } from '../icons'
import IconButton from '../button/icon'

function TrendItem({ order, category, hashtag, number }) {
  return (
    <ExtraButton href="#" className={style.button}>
      <div className={style.textContainer}>
        <SmallText>
          <span>{order}</span>
          <span>·</span>
          <span>{category}</span>
          <span>·</span>
          <span>Trending</span>
        </SmallText>
        <TitleBody bold>{hashtag}</TitleBody>
        <SmallText>
          <span>{number}K Tweets</span>
        </SmallText>
      </div>
      <IconButton className={style.icon}>
        <ArrowBottom />
      </IconButton>
    </ExtraButton>
  )
}

export default TrendItem
