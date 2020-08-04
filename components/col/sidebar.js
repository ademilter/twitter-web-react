import React from 'react'
import cn from 'classnames'

import styles from './sidebar.module.css'

import Navigation from '../navigation/navigation'
import ThemeButton from '../theme-button'
import ProfileBox from '../profile-box'
import TweetModal from '../tweet-modal'
import { Tweet } from '../icons'

function Layout({ flat }) {
  const [isShowModal, isShowModalSet] = React.useState(false)

  const onModalClose = () => {
    isShowModalSet(false)
  }

  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />

      <div className={styles.tweet}>
        <ThemeButton big full={!flat} onClick={() => isShowModalSet(true)}>
          {flat ? <Tweet /> : 'Tweet'}
        </ThemeButton>
      </div>

      {/* tweet-popup */}
      {isShowModal && (
        <TweetModal onModalClose={onModalClose} onClick={onModalClose} />
      )}

      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default Layout
