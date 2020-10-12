import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'
import { Options } from '../icons'
import IconButton from '../button/icon'
import TitleBold from '../text/title'
import ExtraButton from '../button/extra'

function ExtraContainer({ title, options, children, explore = false }) {
  return (
    <section className={cn(styles.extraContainer, explore && styles.explore)}>
      <div className={styles.header}>
        <TitleBold>{title}</TitleBold>
        {options && (
          <IconButton>
            <Options />
          </IconButton>
        )}
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        <ExtraButton href="#" className={styles.button}>
          Show More
        </ExtraButton>
      </div>
    </section>
  )
}

export default ExtraContainer
