import React from 'react'
import cn from 'classnames'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './style.module.css'
import Photo from '../photo'
import IconButton from '../button/icon'
import * as Icon from '../icons'

function Tweet({
  created_at,
  retweet_count,
  favorite_count,
  retweeted,
  favorited,
  text,
  user,
  message
}) {
  return (
    <article className={cn(styles.tweet, message && styles.messageContainer)}>
      {/* avatar */}
      <div className={styles.avatar}>
        <Photo src={user.profile_image_url_https} />
      </div>

      {/* body */}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{user.name}</span>{' '}
          <span>@{user.screen_name}</span> {!message && ' · '}
          {''}
          <span>{formatDistanceToNowStrict(new Date(created_at))}</span>
        </header>

        <div className={styles.content}>{text}</div>

        {!message && (
          <footer className={styles.footer}>
            {/* reply */}
            <div className={styles.footerButton}>
              <IconButton className={styles.actionButton}>
                <Icon.Reply />
              </IconButton>
              {false && <span>3</span>}
            </div>

            {/* retweet */}
            <div className={styles.footerButton}>
              <IconButton className={styles.actionButton}>
                <Icon.Retweet />
              </IconButton>
              {retweet_count && <span>{retweet_count}</span>}
            </div>

            {/* like */}
            <div className={styles.footerButton}>
              <IconButton className={styles.actionButton}>
                <Icon.Like />
              </IconButton>
              {favorite_count && <span>{favorite_count}</span>}
            </div>

            {/* share */}
            <div className={styles.footerButton}>
              <IconButton className={styles.actionButton}>
                <Icon.Share />
              </IconButton>
            </div>
          </footer>
        )}
      </div>
    </article>
  )
}

export default Tweet
