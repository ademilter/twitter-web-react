import React from 'react'

import SearchBox from '../search-box'
import ExtraContainer from '../extra-container'
import TrendItem from '../trend-item'
import FollowPerson from '../follow-person'

function ProfileExtra() {
  return (
    <div>
      <SearchBox />
      <ExtraContainer title="You might like">
        <FollowPerson name="desmond" slug="_desmondhume" />
        <FollowPerson name="desmond" slug="_desmondhume" />
        <FollowPerson name="desmond" slug="_desmondhume" />
      </ExtraContainer>
      <ExtraContainer title="Turkey trends" options>
        <TrendItem
          order="1"
          category="Politics"
          hashtag="#30AgustosZaferBayramimiz"
          number="2,679"
        />
        <TrendItem
          order="2"
          category="News"
          hashtag="#TerörBülteni"
          number="22.6K"
        />
        <TrendItem
          order="3"
          category="Politics"
          hashtag="#Atatürk"
          number="2,679"
        />
        <TrendItem
          order="4"
          category="News"
          hashtag="#ötvzammı"
          number="22.6K"
        />
      </ExtraContainer>
    </div>
  )
}

export default ProfileExtra
