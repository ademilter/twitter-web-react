import React from 'react'

import style from '../titles/explorer-style.module.css'
import IconButton from '../button/icon'
import { Options } from '../icons'
import Header from '../header'
import SearchBox from '../search-box'

function ExplorerTitle() {
  return (
    <Header>
      <SearchBox className={style.searchBox} />
      <IconButton>
        <Options />
      </IconButton>
    </Header>
  )
}

export default ExplorerTitle
