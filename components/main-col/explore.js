import React from 'react'
import useSWR from 'swr'

import fetcher from '../../lib/fetch'
import ExplorerTitle from '../titles/explorer'
import ExtraContainer from '../extra-container'
import TrendItem from '../trend-item'
import Tweet from '../tweet'
import Title from '../titles'
import * as Icons from '../icons'

function ExploreMain() {
  const { data } = useSWR('/api/tweet', fetcher)

  return (
    <div>
      <ExplorerTitle />
      <ExtraContainer title="Turkey trends" explore>
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
      <Title
        subHeader
        bold
        page="Computer Engineering"
        icon={<Icons.ArrowBottom />}
      />
      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet} />
      })}
    </div>
  )
}

export default ExploreMain
