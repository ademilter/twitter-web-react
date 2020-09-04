import React from 'react'

import NotificationTitle from '../titles/notifications'
import NotificationItem from '../notification-item'

function NotificationsMain() {
  return (
    <div>
      <NotificationTitle />
      <NotificationItem name="alihan" tweet="test" />
      <NotificationItem name="alihan" tweet="test" />
      <NotificationItem name="alihan" tweet="test" />
      <NotificationItem name="alihan" tweet="test" />
      <NotificationItem name="alihan" tweet="test" />
      <NotificationItem name="alihan" tweet="test" />
    </div>
  )
}

export default NotificationsMain
