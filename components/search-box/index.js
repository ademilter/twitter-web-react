import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'
import IconButton from '../button/icon'
import { Search } from '../icons'

function SearchBox({ messages, className, ...props }) {
  const placeholder = messages
    ? 'Search for people and groups'
    : 'Search Twitter'
  return (
    <div
      className={cn(styles.searchBox, messages && styles.messages, className)}
      {...props}
    >
      <IconButton>
        <Search />
      </IconButton>
      <input type="text" name="search" placeholder={placeholder} />
    </div>
  )
}

export default SearchBox
