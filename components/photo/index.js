import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function Photo({
  src = 'https://avatars2.githubusercontent.com/u/187922?s=200',
  alt,
  size = 47
}) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}
export default Photo
