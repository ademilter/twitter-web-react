import * as Icon from '../components/icons'
import React from 'react'

export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}

export const MENU = [
  {
    key: 'twitter',
    path: '/',
    icon: <Icon.Twitter style={{ fontSize: 30 }} />,
    iconSelected: <Icon.Twitter style={{ fontSize: 30 }} />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    path: '/explore',
    icon: <Icon.Explore />,
    iconSelected: <Icon.ExplorerFill />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notifications',
    path: '/notifications',
    icon: <Icon.Notification />,
    iconSelected: <Icon.NotificationFill />,
    title: 'Notifications',
    notify: 17
  },
  {
    key: 'messages',
    path: '/messages',
    icon: <Icon.Messages />,
    iconSelected: <Icon.MessagesFill />,
    title: 'Messages',
    notify: 0
  },
  {
    key: 'bookmarks',
    path: '/bookmarks',
    icon: <Icon.Bookmark />,
    iconSelected: <Icon.BookmarkFill />,
    title: 'Bookmarks',
    notify: 0
  },
  {
    key: 'lists',
    path: '/lists',
    icon: <Icon.Lists />,
    iconSelected: <Icon.ListsFill />,
    title: 'Lists',
    notify: 0
  },
  {
    key: 'profile',
    path: '/profile',
    icon: <Icon.Profile />,
    iconSelected: <Icon.ProfileFill />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    path: '/more',
    icon: <Icon.More />,
    iconSelected: <Icon.More />,
    title: 'More',
    notify: 0
  }
]
