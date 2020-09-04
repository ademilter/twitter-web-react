import React, { useState } from 'react'

import styles from './style.module.css'

import Photo from '../photo'
import ThemeButton from '../theme-button'
import CONST from '../../constants'
import IconButton from '../button/icon'
import useWindowSize from '../../hooks/useWindowSize'
import { Media, Gif, Question, Emoji, Date } from '../icons'

function HomeTweet({ onClick = () => {} }) {
  const size = useWindowSize()
  const [tweet, tweetSet] = useState('')

  const onSubmit = async () => {
    try {
      const response = await fetch('/api/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tweet })
      })
      if (response.status !== 200) throw 'Tweet can not be send.'
      tweetSet('')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.avatar}>
        <Photo />
      </div>
      <div className={styles.body}>
        <textarea
          className={styles.textarea}
          name=""
          rows="2"
          placeholder="What's happening?"
          value={tweet}
          onChange={(e) => tweetSet(e.target.value)}
        ></textarea>
        <div className={styles.footer}>
          <div className={styles.buttonContainer}>
            <IconButton>
              <Media />
            </IconButton>
            <IconButton>
              <Gif />
            </IconButton>
            {size.width > CONST.TABLET_SIZE && (
              <IconButton>
                <Question />
              </IconButton>
            )}
            <IconButton>
              <Emoji />
            </IconButton>
            {size.width > CONST.TABLET_SIZE && (
              <IconButton>
                <Date />
              </IconButton>
            )}
          </div>
          <ThemeButton className={styles.submitButton} onClick={onSubmit}>
            Tweet
          </ThemeButton>
        </div>
      </div>
    </div>
  )
}

export default HomeTweet
