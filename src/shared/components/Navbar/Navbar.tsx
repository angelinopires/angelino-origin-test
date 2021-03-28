import React from 'react'

// ASSETS
import { Logo } from '~/assets/icons'

// STYLES
import './Navbar.scss'

export const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo" title="Origin">
        <Logo />
      </h1>
    </nav>
  )
}
