import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  backgroundColor: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const activeLinkStyle = {
  backgroundColor: 'darkblue'
}

const SideMenu = ({ logout }) => {
  return (
    <React.Fragment>
      <NavLink
        to="/"
        exact
        style={linkStyle}
        activeStyle={activeLinkStyle}
      >Home</NavLink>
      <NavLink
        to="/new-expense"
        exact
        style={linkStyle}
        activeStyle={activeLinkStyle}
      >New Expense</NavLink>
      <Link
        to="#"
        onClick={logout}
      >Logout</Link>
    </React.Fragment>
  )
}

export default SideMenu
