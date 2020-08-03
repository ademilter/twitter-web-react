import React from 'react'
import useSWR from 'swr'

import Layout from '../components/layout'
import Tweet from '../components/tweet'
import fetcher from '../lib/fetch'

function HomePage() {
  const { data } = useSWR('/api/tweet', fetcher)

  return (
    <Layout>
      {!data && <p>Loading</p>}

      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet} />
      })}
    </Layout>
  )
}

export default HomePage
