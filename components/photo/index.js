import React from 'react'
import cn from 'classnames'
import useSWR from 'swr'

import styles from './style.module.css'
import fetcher from '../../lib/fetch'

function Photo({
  src,
  alt,
  size = 47,
  header = false,
  profile = false,
  secondSrc
}) {
  const { data } = useSWR('/api/tweet', fetcher)
  return (
    <div
      className={cn([styles.photo], header && styles.header)}
      style={{ width: size, height: size }}
    >
      <img
        className={cn(styles.img, header && styles.header)}
        src={data?.statuses[0].user.profile_image_url_https}
        alt={alt}
      />
      {profile && (
        <img
          className={cn(styles.img, styles.profile)}
          src={secondSrc}
          alt={alt}
          style={{ width: size, height: size }}
        />
      )}
    </div>
  )
}
export default Photo
