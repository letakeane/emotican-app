import React from 'react';
import { NavLink } from 'react-router-dom';

export const LearnNav = () => {

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
            to="/learn/happiness"
            activeStyle={styleActive()}>
              happiness
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learn/anger"
            activeStyle={styleActive()}>
              anger
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learn/sadness"
            activeStyle={styleActive()}>
              sadness
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learn/surprise"
            activeStyle={styleActive()}>
              surprise
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learn/fear"
            activeStyle={styleActive()}>
              fear
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learn/about"
            activeStyle={styleActive()}>
              about
          </NavLink>
        </li>

      </ul>
    </nav>
  )
}
