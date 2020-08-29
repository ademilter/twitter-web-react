import React from 'react'
import styles from './style.module.css'
import IconButton from '../button/icon'
import { Datetime, Emoji, Gif, Media, Question } from '../icons'
import Photo from '../photo'
import ThemeButton from '../theme-button'

function TweetEditor() {
  return (
    <div className={styles.tweet}>
      <div className={styles.photo}>
        <Photo />
      </div>
      <div className={styles.content}>
        <div className={styles.body}>
          <textarea
            className={styles.textarea}
            name=""
            rows="1"
            placeholder="What's happening?"
          />
        </div>
        <div className={styles.footer}>
          <div>
            <IconButton className={styles.footerButton}>
              <Media />
            </IconButton>
            <IconButton className={styles.footerButton}>
              <Gif />
            </IconButton>
            <IconButton className={styles.footerButton}>
              <Question />
            </IconButton>
            <IconButton className={styles.footerButton}>
              <Emoji />
            </IconButton>
            <IconButton className={styles.footerButton}>
              <Datetime />
            </IconButton>
          </div>
          <ThemeButton className={styles.tweetButton}>
            <span>Tweet</span>
          </ThemeButton>
        </div>
      </div>
    </div>
  )
}

export default TweetEditor
