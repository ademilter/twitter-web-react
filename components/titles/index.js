import React from 'react'
import TitleBold from '../text/title'

import IconButton from '../button/icon'
import Header from '../header'
import TitleBody from '../text/body'
import * as Icon from '../icons'
import SmallText from '../text/small'
import Stack from '../stack'

function Title({
  icon,
  back,
  secondIcon,
  page,
  slug,
  forward,
  subHeader = false,
  bold = false,
  children
}) {
  return (
    <Header subHeader={subHeader} slug={slug} back={back}>
      {secondIcon && back && (
        <Stack row>
          {back && (
            <IconButton>
              <Icon.Back />
            </IconButton>
          )}
          {slug && (
            <div>
              {!subHeader && <TitleBold>{page}</TitleBold>}
              {slug && <SmallText>{slug}</SmallText>}{' '}
            </div>
          )}
        </Stack>
      )}



      {slug && !back && (
        <div>
          {!subHeader && <TitleBold>{page}</TitleBold>}
          {slug && <SmallText>@{slug}</SmallText>}{' '}
        </div>
      )}

      {!subHeader && !slug && <TitleBold>{page}</TitleBold>}
      {subHeader && <TitleBody bold={bold}>{page}</TitleBody>}
      {icon && <IconButton forward={forward}>{icon}</IconButton>}
      {secondIcon && <IconButton>{secondIcon}</IconButton>}
      {children}
    </Header>
  )
}

export default Title
