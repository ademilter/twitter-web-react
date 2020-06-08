import React from 'react'
import cn from 'classnames'

import styles from './col-sidebar.module.css'
import Navigation from './navigation'
import ThemeButton from './theme-button'
import ProfileBox from './profile-box'

function Layout({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />
      <ThemeButton big full>
        Tweet
      </ThemeButton>
      <ProfileBox />
    </div>
  )
}

export default Layout
