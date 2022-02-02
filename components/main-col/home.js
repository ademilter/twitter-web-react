import React from 'react'
import useSWR from 'swr'

import styles from '../col/main.module.css'

import fetcher from '../../lib/fetch'
import Tweet from '../tweet'
import HomeTweet from '../home-tweet'
import Loading from '../loading'
import Title from '../titles'
import * as Icons from '../icons'

function HomeMain() {
  const { data } = useSWR('/api/tweet', fetcher)

  return (
    <div>
      <Title page="Home" icon={<Icons.TimelineProp />} />
      <HomeTweet />
      {!data && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}

      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet} />
      })}
    </div>
  )
}

export default HomeMain
