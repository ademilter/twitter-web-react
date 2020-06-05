import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

function Photo({
  src = 'https://pbs.twimg.com/profile_images/1257786508871979009/O7g7fRVQ_400x400.jpg',
  alt
}) {
  return (
    <div className={cn([styles.photo])}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}
export default Photo
