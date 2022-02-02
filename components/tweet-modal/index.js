import React from 'react'

import styles from './style.module.css'

import Photo from '../photo'
import ThemeButton from '../theme-button'
import IconButton from '../button/icon'
import { Close, Media, Gif, Question, Emoji, Date } from '../icons'

function TweetModal({ onModalClose = () => {}, onClick = () => {} }) {
  const [tweet, tweetSet] = React.useState('')

  const onSubmit = async () => {
    try {
      const response = await fetch('/api/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tweet })
      })
      if (response.status !== 200) throw 'Twet gönderilemedi.'

      tweetSet('')
      onModalClose()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <IconButton className={styles.close} onClick={onClick}>
            <Close />
          </IconButton>
        </div>
        <div className={styles.avatar}>
          <Photo />
        </div>

        <div className={styles.body}>
          <textarea
            className={styles.textarea}
            name=""
            rows="6"
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
              <IconButton>
                <Question />
              </IconButton>
              <IconButton>
                <Emoji />
              </IconButton>
              <IconButton>
                <Date />
              </IconButton>
            </div>
            <ThemeButton className={styles.submitButton} onClick={onSubmit}>
              Tweet
            </ThemeButton>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TweetModal
