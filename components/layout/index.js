import React from 'react'
import cn from 'classnames'

import useWindowSize from '../../hooks/useWindowSize'
import styles from './style.module.css'

import Sidebar from '../col/sidebar'
import CONST from '../../constants'
import Main from '../col/main'
import Extra from '../col/extra'

function Layout({
  children,
  explore,
  messages,
  profile,
  index,
  notification,
  bookmarks,
  lists
}) {
  const size = useWindowSize()

  return (
    <div className={cn(styles.layout, messages && styles.messages)}>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>

      <Main
        index={index}
        explore={explore}
        notification={notification}
        messages={messages}
        bookmarks={bookmarks}
        lists={lists}
        profile={profile}
      >
        {children}
      </Main>

      {size.width > CONST.TABLET_SIZE && (
        <Extra explore={explore} messages={messages} profile={profile}>
          extra
        </Extra>
      )}
    </div>
  )
}

export default Layout
