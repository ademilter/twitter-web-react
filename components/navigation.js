import React from 'react'

import NavigationButton from './navigation-button'
import TitleBold from './title-bold'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from './icons'

import styles from './navigation.module.css'

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'home'}>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'explore'}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavigationButton>

      <NavigationButton notify={17} selected={selectedKey === 'notification'}>
        <Notification />
        <TitleBold>Notification</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'messages'}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'bookmark'}>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'lists'}>
        <Lists />
        <TitleBold>Lists</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'profile'}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'more'}>
        <More />
        <TitleBold>More</TitleBold>
      </NavigationButton>
    </nav>
  )
}

export default Navigation
