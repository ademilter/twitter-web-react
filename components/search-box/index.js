import React from 'react'
import styles from './style.module.css'
import { Search } from '../icons'

function SearchBox() {
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="Search Twitter" />
      <Search />
    </div>
  )
}

export default SearchBox
