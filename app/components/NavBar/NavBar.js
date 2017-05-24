import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

  const styleActive = () => {
    return (
      {
        fontWeight: 700,
        color: 'rgba(246, 193, 160, 100)',
        borderBottom: '4px solid rgba(246, 193, 160, 100)'
      }
    )
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/instructions"
            activeStyle={styleActive()}>
              instructions
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/"
            activeStyle={styleActive()}>
              play
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learn"
            activeStyle={styleActive()}>
              learn
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
