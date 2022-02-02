import React from 'react'
import useSWR from 'swr'

import Title from '../titles'
import fetcher from '../../lib/fetch'
import * as Icons from '../icons'
import Tweet from '../tweet'
import SearchBox from '../search-box'

function MessageMain() {
  const { data } = useSWR('/api/tweet', fetcher)

  return (
    <div>
      <Title page="Messages" icon={<Icons.SendMessage />} />
      <Title
        forward
        subHeader
        page="Message request"
        icon={<Icons.ArrowBottom />}
      />
      <Title subHeader>
        <SearchBox messages />
      </Title>
      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} message {...tweet} />
      })}
    </div>
  )
}

export default MessageMain
