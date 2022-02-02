import React from 'react'

import Title from '../titles'
import ProfileContainer from '../profile-container'

function ProfileMain() {
  return (
    <div>
      <Title page="desmond" back slug="322 Tweets" secondIcon={' '} />
      <ProfileContainer
        name="desmond"
        slug="_desmondhume"
        create="June 2017"
        following="637"
        followers="22"
      />
    </div>
  )
}

export default ProfileMain
