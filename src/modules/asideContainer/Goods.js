import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'

import RouteWithSubRoutes from '../../common/RouteWithSubRoutes.js'

export default ({ routes, path }) => (
  <div>
    <div className='aside-nav'>
      <NavLink to="/goods/list">List</NavLink>
      <NavLink to="/goods/brand">Light Color</NavLink>
    </div>

    {
      routes.map((route, i) => {
        return (
          <RouteWithSubRoutes key={i} {...route}/>
        )
      })
    }

    <Route exact path='/goods' render={() => (
      <Redirect to='goods/list' />
    )} />
  </div>
)
