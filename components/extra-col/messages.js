import React from 'react'

import styles from '../col/extra.module.css'
import TitleBody from '../text/body'
import TitleBold from '../text/title'
import ThemeButton from '../theme-button'
import Stack from '../stack'

function MessagesExtra() {
  return (
    <div className={styles.messagesContainer}>
      <Stack gap={15} column>
        <TitleBold bold>You don’t have a message selected</TitleBold>
        <TitleBody>
          Choose one from your existing messages, or start a new one.
        </TitleBody>
        <ThemeButton>New Message</ThemeButton>
      </Stack>
    </div>
  )
}

export default MessagesExtra
