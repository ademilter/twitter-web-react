import React from 'react'
import cn from 'classnames'

import styles from './main.module.css'

import HomeMain from '../main-col/home'
import ExploreMain from '../main-col/explore'
import NotificationsMain from '../main-col/notifications'
import MessageMain from '../main-col/message'
import BookmarksMain from '../main-col/bookmark'
import ListsMain from '../main-col/lists'
import ProfileMain from '../main-col/profile'

function Main({
  children,
  index,
  profile,
  explore,
  notification,
  messages,
  bookmarks,
  lists
}) {
  return (
    <div className={cn(styles.main, profile && styles.profile)}>
      {index && <HomeMain />}
      {explore && <ExploreMain />}
      {notification && <NotificationsMain />}
      {messages && <MessageMain />}
      {bookmarks && <BookmarksMain />}
      {lists && <ListsMain />}
      {profile && <ProfileMain />}
      {children}
    </div>
  )
}

export default Main
