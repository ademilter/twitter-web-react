import React from 'react'

import Title from '../titles'
import Stack from '../stack'
import TitleBold from '../text/title'
import SmallText from '../text/small'

function BookmarksMain() {
  return ( 
      <div>
      <Title page="Bookmarks" slug="_desmondhume" />
      <Stack gap={10} column center>
        <TitleBold bold>
          You haven’t added any Tweets to your Bookmarks yet
        </TitleBold>
        <SmallText>When you do, they’ll show up here.</SmallText>
      </Stack>
      </div>
  )
}

export default BookmarksMain
