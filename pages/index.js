import React from 'react'
import useSWR from 'swr'

import styles from './index.module.css'

import Layout from '../components/layout'
import Tweet from '../components/tweet'
import fetcher from '../lib/fetch'
import Loading from '../components/loading'

function HomePage() {
  const { data } = useSWR('/api/tweet', fetcher)
  
  const user =
      {
        "name": "Adem ilter ",
        "profile_image_url_https" :'https://pbs.twimg.com/profile_images/1398011050193195010/y0qWO7xc_normal.jpg',
        "screen_name" :'ademilter ',
      }

  return (
    <Layout>
      
    <Tweet
        user = {user}
        text={`İlk tweet ilk satır
    ikinci satır
        üçüncü satır`}
        created_at={new Date('2021-06-02')}
      />

      {!data && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}

      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet} />
      })}
    </Layout>
  )
}

export default HomePage
