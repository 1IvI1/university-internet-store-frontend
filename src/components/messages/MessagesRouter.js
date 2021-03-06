import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Chat from './Chat'
import Dialogs from './Dialogs'

function MessagesRouter() {
  const match = useRouteMatch()
  // console.log('match.url', match.url)
  return (
    <Switch>
      <Route exact path={`${match.url}`}>
        <Dialogs />
      </Route>
      <Route path={`${match.url}/chat/:chatId`}>
        <Chat />
      </Route>
    </Switch>
  )
}

export default MessagesRouter
