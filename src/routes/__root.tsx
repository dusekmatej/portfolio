import * as React from 'react'
import Navigation from '../components/Navigation'
import { Outlet, createRootRoute} from '@tanstack/react-router'


export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Navigation />
      <Outlet />
    </React.Fragment>
  )
}
