import React from 'react'
import cn from 'classnames'

import styles from './extra.module.css'
import SearchBox from '../search-box'
import ExtraBox from '../extra-box'
import TrendsItem from '../trends-item'
import FollowItem from '../follow-item'

function Sidebar({ children }) {
  return (
    <div className={cn(styles.extra)}>
      <SearchBox />
      <ExtraBox title="Turkey trends" options>
        <TrendsItem
          order="1"
          category="Politics"
          tag="#bilimkurulu"
          count="2,679"
        />
        <TrendsItem
          order="2"
          category="News"
          tag="#TamBağımsızEkonomi"
          count="22.6K"
        />
      </ExtraBox>
      <ExtraBox title="Who to follow">
        <FollowItem name="Halit Ak" slug="akhalit_" />
          <FollowItem name="Halit Ak" slug="akhalit_" />
          <FollowItem name="Halit Ak" slug="akhalit_" />
      </ExtraBox>
    </div>
  )
}

export default Sidebar
