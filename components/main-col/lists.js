import React from 'react'

import Title from '../titles'
import Stack from '../stack'
import TitleBold from '../text/title'
import SmallText from '../text/small'
import * as Icons from '../icons'
import ThemeButton from '../theme-button'

function ListsMain() {
  return (
    <div>
      <Title
        page="Lists"
        back
        slug="_desmondhume"
        icon={<Icons.AddLists />}
        secondIcon={<Icons.Dots />}
      />
      <Title page="Pinned" />
      <Stack gap={10} column center border>
        <SmallText>
          Nothing to see here yet — pin up to five of your favorite Lists to
          access them quickly.
        </SmallText>
      </Stack>
      <Title page="Your Lists" />
      <Stack gap={13} column center>
        <TitleBold bold>You haven’t created any Lists yet</TitleBold>
        <SmallText>When you do, it’ll show up here.</SmallText>
        <ThemeButton>Create a List</ThemeButton>
      </Stack>
    </div>
  )
}

export default ListsMain
