import React from 'react'
import useSWR from 'swr'

import style from './style.module.css'

import Photo from '../photo'
import Button from '../button'
import TitleBold from '../text/title'
import fetcher from '../../lib/fetch'
import Tweet from '../tweet'
import TextBody from '../text/body'
import Stack from '../stack'
import SmallText from '../text/small'
import * as Icon from '../icons'
import ExtraButton from '../button/extra'

function ProfileContainer({ name, slug, created, following, followers }) {
  const { data } = useSWR('/api/tweet', fetcher)
  return (
    <section>
      <div className={style.photo}>
        <Photo
          profile
          header
          src={
            'https://pbs.twimg.com/profile_banners/3337646069/1576277530/1500x500'
          }
          secondSrc={
            'https://pbs.twimg.com/profile_images/1260169365405732865/Qlvsxt1k_400x400.jpg'
          }
        />
      </div>
      <div className={style.button}>
        <Button>Edit profile</Button>
      </div>
      <div className={style.infoContainer}>
        <Stack column gap={0}>
          <TitleBold bold>{name}</TitleBold>
          <SmallText>@{slug}</SmallText>
          <Stack row small gap={8}>
            <Icon.Calendar />
            <SmallText>Joined {created}</SmallText>
          </Stack>
          <Stack row small>
            <Stack row small gap={3}>
              <TextBody bold>{following}</TextBody>
              <SmallText>Following</SmallText>
            </Stack>
            <Stack row gap={3} small>
              <TextBody bold>{followers}</TextBody>
              <SmallText>Followers</SmallText>
            </Stack>
          </Stack>
        </Stack>
        <div className={style.buttonContainer}>
          <ExtraButton>
            <span>Tweets</span>
          </ExtraButton>
          <ExtraButton>
            <span>Tweets & Replies</span>
          </ExtraButton>
          <ExtraButton>
            <span>Media</span>
          </ExtraButton>
          <ExtraButton>
            <span>Likes</span>
          </ExtraButton>
        </div>
      </div>
      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet} />
      })}
    </section>
  )
}

export default ProfileContainer
