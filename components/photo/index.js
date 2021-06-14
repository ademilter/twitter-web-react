import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function Photo({
  src = 'https://pbs.twimg.com/profile_images/1254318131994079232/8fLjM5T3_normal.jpg',
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
